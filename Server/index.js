// ============================== Import ==============================
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


// ============================== Middleware ==============================
app.use(cors());
app.use(express.json());


// ===================================== MONGO DB =====================================
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@my-mongodb.2rdes.mongodb.net/?retryWrites=true&w=majority&appName=My-MongoDB`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Main Database table name
        const reviewCollection = client.db('reviewDB').collection('reviews');
        const watchListCollection = client.db('reviewDB').collection('watchlist');

        //Create data on database
        app.post('/addReview', async (req, res) => {
            const newReview = req.body;
            //console.log(newReview); //-->delete it
            const result = await reviewCollection.insertOne(newReview);
            res.send(result);
        });

        //Get all data from database
        app.get('/addReview', async (req, res) => {
            const cursor = reviewCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // Get single data from database
        app.get(`/addReview/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await reviewCollection.findOne(query);
            res.send(result);
        });

        // Get single id for update data
        app.get(`/addReview/update/:id`, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await reviewCollection.findOne(query);
            res.send(result);
        });


        // ---------------------- Game Watchlist ----------------------
        // watchlist post data
        app.post('/myWatchlist', async (req, res) => {
            const newWatchList = req.body;
            const result = await watchListCollection.insertOne(newWatchList);
            res.send(result);
        });
        // watchlist get data
        app.get('/myWatchlist', async (req, res) => {
            const cursor = watchListCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // Email
        app.get(`/addReview/email/:email`, async (req, res) => {
            const email = decodeURIComponent(req.params.email);
            const query = { email: email };
            const result = await reviewCollection.find(query).toArray();
            res.send(result);
        });


        // Update review
        app.put(`/addReview/update/:id`, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateReview = req.body;
            const updateReviewDetails = {
                $set: {
                    title: updateReview.title,
                    image: updateReview.image,
                    rating: updateReview.rating,
                    genres: updateReview.genres,
                    year: updateReview.year,
                    email: updateReview.email,
                    name: updateReview.name,
                    description: updateReview.description,
                },
            };

            const result = await reviewCollection.updateOne(filter, updateReviewDetails, options);
            res.send(result);
        });

        // Delete review data
        app.delete(`/addReview/:id`, async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await reviewCollection.deleteOne(query);
            res.send(result);
        })



        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
// ====================================================================================


// ============================== Create Server ==============================
app.get('/', (req, res) => {
    res.send({
        'Server': 'Server is connected successfully',
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
