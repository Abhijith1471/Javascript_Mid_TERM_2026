import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import type { Request, Response } from 'express';

const app = express();
const port = 3000;