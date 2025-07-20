#!/bin/bash

# Raj Kunwar Singh Portfolio - Deployment Script
# This script helps deploy the portfolio to various platforms

echo "🚀 Raj Kunwar Singh Portfolio - Deployment Script"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "🎯 Deployment Options:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. GitHub Pages"
    echo "4. Manual deployment"
    echo ""
    read -p "Choose deployment option (1-4): " choice

    case $choice in
        1)
            echo "🚀 Deploying to Vercel..."
            if command -v vercel &> /dev/null; then
                vercel --prod
            else
                echo "❌ Vercel CLI not installed. Installing..."
                npm install -g vercel
                vercel --prod
            fi
            ;;
        2)
            echo "🚀 Deploying to Netlify..."
            if command -v netlify &> /dev/null; then
                netlify deploy --prod --dir=dist
            else
                echo "❌ Netlify CLI not installed. Please install it first:"
                echo "npm install -g netlify-cli"
                echo "Then run: netlify deploy --prod --dir=dist"
            fi
            ;;
        3)
            echo "🚀 Deploying to GitHub Pages..."
            echo "Please follow these steps:"
            echo "1. Push your code to GitHub"
            echo "2. Go to repository settings"
            echo "3. Enable GitHub Pages"
            echo "4. Set source to 'gh-pages' branch or '/docs' folder"
            echo "5. Copy the contents of 'dist' folder to the selected source"
            ;;
        4)
            echo "📁 Manual deployment"
            echo "The built files are in the 'dist' folder."
            echo "Upload these files to your web server."
            echo ""
            echo "📋 Files to upload:"
            ls -la dist/
            ;;
        *)
            echo "❌ Invalid option. Please run the script again."
            exit 1
            ;;
    esac
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

echo ""
echo "🎉 Deployment script completed!"
echo "📧 For support, contact: raj.kunwar.singh@gmail.com" 