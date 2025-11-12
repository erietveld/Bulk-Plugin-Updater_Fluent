#!/bin/bash

# Script to deploy subflow to another instance
# Usage: ./deploy-subflow.sh target-instance-url

TARGET_INSTANCE=${1:-"your-target-instance.service-now.com"}
SUBFLOW_NAME="Process Plugin Updates"

echo "🚀 Deploying subflow '$SUBFLOW_NAME' to $TARGET_INSTANCE"

# Step 1: Build the application locally
echo "📦 Building application..."
snc build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful"

# Step 2: Configure target instance profile
echo "🔧 Configuring target instance profile..."
read -p "Enter username for $TARGET_INSTANCE: " USERNAME
read -s -p "Enter password: " PASSWORD
echo ""

snc configure profile set --profile target --url https://$TARGET_INSTANCE --username $USERNAME --password $PASSWORD

# Step 3: Deploy to target instance
echo "📤 Deploying to target instance..."
snc deploy --profile target

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed subflow to $TARGET_INSTANCE"
    echo "🔍 You can now find your subflow in Flow Designer on the target instance"
else
    echo "❌ Deployment failed. Check the output above for errors."
    exit 1
fi