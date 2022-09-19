/* eslint-disable no-undef */
const todoList = require("../todo.js");

const {
  all,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  add,
  today,
  yesterday,
  tomorrow,
} = todoList();

describe("Todo Test Suite", () => {
  beforeAll(() => {
    add({ title: "Submit assignment", dueDate: yesterday, completed: false });
    add({ title: "Pay rent", dueDate: today, completed: true });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "File taxes", dueDate: tomorrow, completed: false });
  });

  test("Testing Add todo Function", () => {
    const todoItemsCount = all.length;
    add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Testing Marking a todo completed", () => {
    markAsComplete(0);
    markAsComplete(1);
    expect(all[0].completed).toBe(true);
    expect(all[1].completed).toBe(true);
  });

  test("Testing retrieval of overdue items", () => {
    expect(overdue().length).toBe(1);
    expect(overdue()[0].title).toBe("Submit assignment");
  });

  test("Testing retrieval of due today Items", () => {
    expect(dueToday().length).toBe(2);
    expect(dueToday()[0].title).toBe("Pay rent");
    expect(dueToday()[1].title).toBe("Service Vehicle");
  });

  test("Testing retrieval of due later Items", () => {
    expect(dueLater().length).toBe(2);
    expect(dueLater()[0].title).toBe("File taxes");
    expect(dueLater()[1].title).toBe("Pay electric bill");
  });
});
