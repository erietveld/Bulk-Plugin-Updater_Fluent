#!/bin/bash

# Quick deployment script for existing subflow
# This copies the generated subflow to the main fluent directory and deploys

echo "🔄 Moving subflow from generated to main fluent directory..."

# Copy the generated subflow to main fluent directory
cp src/fluent/generated/sys_hub_flow_fc2cbc1bfb0d72105543f4c69eefdca0.now.ts src/flows/fluent/process-plugin-updates-subflow.now.ts

echo "✅ Subflow copied to src/flows/fluent/process-plugin-updates-subflow.now.ts"

# Build and deploy
echo "📦 Building application..."
snc build && echo "✅ Build successful" || (echo "❌ Build failed" && exit 1)

echo "📤 Installing to current instance..."
snc install && echo "✅ Installation successful" || (echo "❌ Installation failed" && exit 1)

echo "🎉 Subflow is now part of your main application structure"
echo "💡 You can now deploy this to other instances using 'snc deploy --profile [target-profile]'"