from flask import Flask, jsonify, request
import redis
from datetime import datetime

app = Flask(__name__)

# Connect to Redis
REDIS_URI = 'redis://redis:6379'
redis_client = redis.Redis.from_url(REDIS_URI, decode_responses=True)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'OK', 'service': 'analytics-service'})

@app.route('/analytics/pageview', methods=['POST'])
def track_pageview():
    try:
        data = request.get_json()
        path = data.get('path', '/')
        
        # Record page view
        today = datetime.now().strftime('%Y-%m-%d')
        redis_client.hincrby(f'pageviews:{today}', path, 1)
        
        return jsonify({'message': 'Page view recorded'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/analytics/summary', methods=['GET'])
def get_analytics_summary():
    try:
        today = datetime.now().strftime('%Y-%m-%d')
        
        # Get today's page views
        pageviews = redis_client.hgetall(f'pageviews:{today}')
        total_views = sum(int(views) for views in pageviews.values())
        
        return jsonify({
            'date': today,
            'total_views': total_views,
            'pageviews': pageviews
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
