# Prompt the user for input
echo "Enter a folder name: "
read folder_name

# Create the folder
mkdir "$folder_name"

# Change into the created folder
cd "$folder_name"

# Create the .jsx file
touch "${folder_name}.jsx"

# Create the index.js file
touch index.js

# Create the .module.css file
lowercase_folder_name=$(echo "$folder_name" | tr '[:upper:]' '[:lower:]')
touch "${lowercase_folder_name}.module.css"

# Print a message indicating success
echo "Folder '$folder_name' and files created successfully."
