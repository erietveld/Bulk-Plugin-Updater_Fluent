#!/bin/bash

# Script to create and deploy a sub flow to another instance
# Usage: ./create-subflow.sh "subflow_name" "target_instance_url"

SUBFLOW_NAME=$1
TARGET_INSTANCE=${2:-"your-target-instance.service-now.com"}

echo "Creating sub flow: $SUBFLOW_NAME"

# Step 1: Create the sub flow structure in Fluent
echo "Generating Fluent sub flow definition..."

# Step 2: Build the application
echo "Building application..."
snc build

if [ $? -ne 0 ]; then
    echo "Build failed. Please fix errors before deploying."
    exit 1
fi

# Step 3: Install to current instance first
echo "Installing to current instance..."
snc install

# Step 4: Generate update set or deploy directly
echo "Deploying to target instance: $TARGET_INSTANCE"

# Option A: Direct deploy (if configured)
snc configure profile set --profile target --url https://$TARGET_INSTANCE --username admin
snc deploy --profile target

# Option B: Create update set (alternative approach)
# This would require additional scripting to create update sets

echo "Sub flow deployment completed!"