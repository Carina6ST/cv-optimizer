
from flask import Flask
from routes import register_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})  # restrict in prod
    register_routes(app)

    @app.get("/health")
    def health():
        return {"status": "ok"}, 200

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
