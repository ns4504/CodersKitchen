export class Response {
  constructor(id, reply, timestamp, messageId, subject) {
    this.id = id;
    this.reply = reply;
    this.timestamp = timestamp;
    this.messageId = messageId;
    this.subject = subject;
  }
}
