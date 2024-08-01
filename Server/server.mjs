import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import {expressMiddleware} from '@apollo/server/express4';
import cors from 'cors';
import fakedata from './Data/fakedata.mjs';
const app = express();

const httpServer = http.createServer(app);
// mô tả dữ liệu
const typeDefs = `#graphql
    type Folder {
        id: String,
        name: String, 
        CreatedAt: String,
        author: Author
    }

    type Author {
        id: String,
        name: String
    }

    type Query {
        folders : [Folder]
    }
`;

// dữ liệu trả về dựa trên ressolver
const resolvers = {
    Query: {
        folders: () =>{ return fakedata.folders},
    },
    Folder: {
        author: (parent, args, context, infor)=> {
            console.log({"parent": parent, "args": args}); 
            const authorId = parent.authorId
            return fakedata.authors.find(author=>author.id === authorId)
        }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
});

await server.start();

app.use(cors(), bodyParser.json(),expressMiddleware(server));

await new Promise((resolve)=> httpServer.listen({port: 4000}, resolve));
console.log('server ready at port 4000');