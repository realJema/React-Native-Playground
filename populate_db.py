import pymongo

'''
Creating a database
'''
# ****Be ware that your database won't be created until you insert the first data into a collection*****
myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/") # connect to local mongodb(yours might be different)

mydb = myclient["nativenews"] # creates database 
mycol = mydb["posts"] # create collection in mydb

# Variables holding data   

dataList = [
    {
        "title": "Title of the first post",
        "img": "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "sub_title": "This is a subtitle",
        "description": "This is my first post",
        "category": "politics",
        "likes": 10,
        "author": "@realjema",
        "location": "yaounde",
        "date": {
            "day": 3,
            "month": "August",
        }
    }
]

# inserting into collection
x = mycol.insert_many(dataList)

# printing details   
print(myclient.list_database_names())
print(mydb.list_collection_names())

dblist = myclient.list_database_names()
collist = mydb.list_collection_names()

# checks for debugging purposes 
if "nativenews" in dblist:
    print("The database exists")

if "News" in collist:
    print("The collection exist")

'''
Searching in a database
'''
print('*'*50 + '\nSearching database \n' +'*'*50)
print('\nFind One' +'_'*50)
a = mycol.find_one() # finds the first element in collection
print(a)

print('\nFind All' +'_'*50)
# find all elements 
for x in mycol.find():
    print(x)

