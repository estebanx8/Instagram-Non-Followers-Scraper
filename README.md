# Instagram-Non-Followers-Scraper
## About
This is a JavaScript script that scrapes Instagram to find users who don't follow you back. It uses the Instagram GraphQL API to fetch the list of users who don't follow you and saves the results to a text file.
## HOW TO USE
1. Open the script in a browser console (e.g. Chrome DevTools)
2. Make sure you are logged in to your Instagram account
3. Run the script
4. Wait for the script to finish running (this may take some time depending on the number of users)
5. The script will save the list of users who don't follow you back to a file named 'usersNotFollowingBack.txt'
## NOTE
* This script is for personal use only and should not be used to scrape large amounts of data from Instagram.
* Instagram's terms of service prohibit scraping, so use this script at your own risk.
* This script is provided as-is and without warranty.
## CODE EXPLANATION 
The script uses the following functions:

* getInstagramNonFollowers(): The main function that scrapes Instagram for users who don't follow you back.
* getCookie(name): A helper function that retrieves a cookie value from the browser.
* sleep(ms): A helper function that pauses the script for a specified amount of time.
### The script uses the Instagram GraphQL API to 'fetch' the list of users who don't follow you back. It uses the fetch API to make requests to the API and the 'JSON' API to parse the response data. The script also uses the 'console' API to log progress and errors.
## LICENSE
This script is licensed under the MIT License. See the 'LICENSE' file for details.
## AUTHOR
JETG (https://github.com/estebanx8)
