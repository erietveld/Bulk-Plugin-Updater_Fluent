#!/bin/bash

# Create an update set containing the subflow
# This is useful when you can't use direct SDK deployment

echo "📋 Creating Update Set for Process Plugin Updates Subflow"

# Get current instance details
CURRENT_INSTANCE=$(snc configure profile get | grep "url" | cut -d'"' -f4)
echo "Current instance: $CURRENT_INSTANCE"

echo "🔧 Manual steps required:"
echo "1. Build and install your application locally:"
echo "   snc build && snc install"
echo ""
echo "2. Go to your ServiceNow instance: $CURRENT_INSTANCE"
echo ""
echo "3. Create a new Update Set:"
echo "   - Navigate to System Update Sets > Local Update Sets"
echo "   - Click 'New' and name it 'Process Plugin Updates Subflow'"
echo "   - Make it current"
echo ""
echo "4. Capture the subflow in the update set:"
echo "   - Go to Flow Designer"
echo "   - Open 'Process Plugin Updates' subflow"
echo "   - Make a small change (like adding a space to description)"
echo "   - Save it - this captures it in the update set"
echo ""
echo "5. Export the update set:"
echo "   - Go back to System Update Sets > Local Update Sets"
echo "   - Find your update set and click 'Export to XML'"
echo ""
echo "6. Import on target instance:"
echo "   - Go to target instance"
echo "   - Navigate to System Update Sets > Retrieved Update Sets"
echo "   - Click 'Import Update Set from XML'"
echo "   - Upload your exported XML file"
echo "   - Preview and commit the update set"
echo ""
echo "✅ Your subflow will now be available on the target instance!"