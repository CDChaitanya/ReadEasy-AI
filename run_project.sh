#!/bin/bash

echo "🔵 Starting ReadEasy AI Setup..."

### === BACKEND (Flask) === ###
echo "📦 Setting up Flask backend..."

# Step 1: Create virtual environment if not present
if [ ! -d "venv" ]; then
  echo "🛠️ Creating Python virtual environment..."
  python3 -m venv venv
fi

# Step 2: Activate virtual environment
echo "🚀 Activating virtual environment..."
source venv/bin/activate

# Step 3: Install Python dependencies
echo "📥 Installing backend requirements..."
pip install --upgrade pip
pip install -r requirements.txt

# Step 4: Run Flask server in background
echo "🚀 Launching Flask server..."
export FLASK_APP=app.py
export FLASK_ENV=development
flask run &
FLASK_PID=$!

### === FRONTEND (React) === ###
echo "📦 Setting up React frontend..."

# Step 1: Navigate to frontend folder
cd frontend/readeasy-chat || { echo "❌ Could not find frontend/readeasy"; kill $FLASK_PID; exit 1; }

# Step 2: Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "⚠️ Node.js is not installed. Please install Node.js and re-run this script."
    kill $FLASK_PID
    exit 1
fi

# Step 3: Install Node dependencies
echo "📥 Installing frontend dependencies..."
npm install

# Step 4: Start React app
echo "🚀 Launching React frontend..."
npm start

# Kill Flask when React ends
kill $FLASK_PID
