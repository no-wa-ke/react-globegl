#!/bin/bash

# sh

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
# hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# # Go To Public folder
# #cd docs
# cd docs

# https://no-wa-ke.github.io/react-globegl
# https://qiita.com/yuitnnn/items/11375ea29ec023d19fdf
# GitHub Pages
npm run deploy 
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin main

# Come Back up to the Project Root
# cd ..