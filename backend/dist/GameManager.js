"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
const message_1 = require("./message");
const Game_1 = require("./Game");
// }
class GameManager {
    constructor() {
        this.games = [];
        this.pendingUser = null;
        this.users = [];
    }
    adduser(socket) {
        this.users.push(socket);
        this.handleMessage(socket);
    }
    removeUser(socket) {
        this.users = this.users.filter((user) => user !== socket);
        // Stop the game
    }
    handleMessage(socket) {
        socket.on("message", (data) => {
            const message = JSON.parse(data.toString());
            if (message.type === message_1.INIT_GAME) {
                if (this.pendingUser) {
                    // Start a game
                    const game = new Game_1.Game(this.pendingUser, socket);
                    this.games.push(game);
                    this.pendingUser = null;
                }
                else {
                    this.pendingUser = socket;
                }
            }
            if (message.type === message_1.MOVE) {
                console.log("Let's make a move");
                const game = this.games.find((game) => game.player1 === socket || game.player2 === socket);
                if (game) {
                    game.makeMove(socket, message.move);
                }
            }
        });
    }
}
exports.GameManager = GameManager;
