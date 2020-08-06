'''
    author: @realjema
    date: August 2020 
    description: This script is used to send data into a mongodb collection atlas
'''
import pymongo

# ****Be ware that your database won't be created until you insert the first data into a collection*****
# myclient = pymongo.MongoClient("mongodb://127.0.0.1:27017/") # connect to local mongodb(yours might be different)
myclient = pymongo.MongoClient("mongodb+srv://admin:neverSETTLE4anything!@nativenews.esbmn.mongodb.net/nativenews?retryWrites=true&w=majority") # connect to my cloud mongodb (password displayed!!!!)

mydb = myclient["nativenews"] # checks/creates database (upated <nativenews> with your db name)
mycol = mydb["posts"] # checks/creates collection in mydb (updated <posts> with your collection name)

# values to be inserted in the collection are stored as json 
dataList = [
    {
        "title": "Beirut explosion: 'She's only four days old' - parents' anguish as daughter injured in blast",
        "img": "https://e3.365dm.com/20/08/1600x900/skynews-beirut-lebanon-explosion_5058417.jpg?bypass-service-worker&20200805014306",
        "sub_title": "Sky's Alex Crawford speaks to the parents of a four-day-old baby who was hurt in the huge explosion in Lebanon's capital.",
        "description": "It takes a very hardened sort of individual not to feel and empathise with the pain of new parents sitting outside the Intensive Care Unit where their little one is struggling to live. She's only four days old, her father, George Ajoury, told us.I was breastfeeding her, Nelly Ajoury, her mother explained. \"I tried my best to protect her but I just couldn't.\" Mrs Ajoury has a broken nose and stitches in her arms, legs, thighs and forehead from the shards of glass which have pierced her skin multiple times. Her little newborn daughter Sophie looks like a bundle of vulnerability. She has a large bandage wrapped round her head and is being monitored in an incubator whilst doctors decide what the best course of treatment for her is. They fear she'll need surgery to relieve the pressure on her brain caused by swelling and bleeding. \"We just hope she's okay,\" says her tearful mother. \"We just want her to be okay. We're not leaving without her.\"",
        "category": "world",
        "likes": 10,
        "author": "Alex Crawford Special correspondent @AlexCrawfordSky",
        "location": "beirut",
        "date": {
            "day": 6,
            "month": "August",
        }
    },
    {
        "title": "YouTube star Jake Paul's California mansion raided by FBI",
        "img": "https://e3.365dm.com/20/08/1600x900/skynews-jake-paul-george-floyd_5059337.jpg?bypass-service-worker&20200806071217",
        "sub_title": "The controversial celebrity is being investigated after an upmarket Arizona mall was looted during George Floyd protests.",
        "description": "Several rifles were seen being taken out of the 23-year-old's Calabasas mansion as part of an investigation into a looting spree at an Arizona shopping centre in May during George Floyd protests, authorities said. The Las Vegas homes of Paul's associates, nightclub promoter Arman Izadi and Andrew Leon, were also searched by the FBI but nobody was taken into custody and no arrest warrant has been issued for Paul, the agency said. Paul, whose viral YouTube videos of provocative pranks has won him more than 20 million followers, was not at home when it was searched, an FBI spokeswoman in Los Angeles said. A spokesman for the FBI's Phoenix office, where the mall is, said agents were \"investigating allegations of criminal acts surrounding the incident at Scottsdale Fashion Square in May\".",
        "category": "trending",
        "likes": 10,
        "author": "realjema",
        "location": "yaounde",
        "date": {
            "day": 6,
            "month": "August",
        }
    },
    {
        "title": "Twitter under fresh pressure to remove racist content sooner after Labour frontbencher David Lammy reveals abuse",
        "img": "https://e3.365dm.com/20/08/1600x900/2372008040122055507_5057872.jpg?bypass-service-worker&20200804122608",
        "sub_title": "The shadow minister's appeal to Twitter for swifter action is supported by Home Secretary Priti Patel.",
        "description": "David Lammy, the shadow justice secretary, reported a tweet to police on Sunday after a Twitter user branded him \"monkey boy\" and added: \"You will hang from a lamppost if you are not careful.\" However, on Monday, the Tottenham MP revealed how the threatening tweet was still live on Twitter despite police having begun an investigation. Mr Lammy urged Twitter chief executive Jack Dorsey to \"tell me racist abuse is not welcome on your platform\". \"You need to get so much faster at removing hate,\" he added. Mr Lammy's appeal for swifter action was supported by Home Secretary Priti Patel, who told her fellow MP she was \"sorry you have faced this awful racist abuse\". \"As I have said before, @Twitter must take decisive action against this sort of vile content much faster,\" Ms Patel tweeted.",
        "category": "politics",
        "likes": 10,
        "author": "Greg Heffer Political reporter @GregHeffer",
        "location": "yaounde",
        "date": {
            "day": 4,
            "month": "August",
        }
    },
]

# inserting into collection
# we loop through all the values in the array 
# we can do this with a bulk upload (still to learn that)
i = 1
for value in dataList:
    mycol.insert_one(value)
    print('------------- +', i)
    i = i + 1

# printing details   
dblist = myclient.list_database_names()
collist = mydb.list_collection_names()
print(dblist)
print(collist)

# checks for debugging purposes 
# (make sure to update <nativenes> here)
if "nativenews" in dblist:
    print("The database exists")

# (make sure to update <posts> here)
if "posts" in collist:
    print("The collection exist")

# displaying all the values in the collection 
print('\nFind All' +'_'*50)
# find all elements 
import pprint # used to display json in a clear format 
for x in mycol.find():
    pprint.pprint(x)
    print('\n\n')
