import { io } from "socket.io-client";

const socket = io("http://192.168.60.43:3000");

export default socket;