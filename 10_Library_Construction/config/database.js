// error sebelumnya
// import { PrismaClient } from "@prisma/client";
// prisma using prisma dari generated prisma
import {PrismaClient} from "../generated/prisma/index.js";
export const prisma = new PrismaClient();