greetings = [
  "Hello, World!",
  "Hi there!",
  "Welcome!",
  "Greetings!",
  "Hey!"
]

greetings.each do |greeting|
  Message.create(content: greeting)
end
