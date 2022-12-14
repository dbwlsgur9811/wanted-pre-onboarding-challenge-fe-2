/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {}

/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}

/**
 * Generic dairy product.
 * @constructor
 */
function DairyProduct() {}

/**
 * Check whether the dairy product is solid at room temperature.
 * @abstract
 * @return {boolean}
 */
DairyProduct.prototype.isSolid = function () {
  throw new Error("must be implemented by subclass!");
};

/**
 * Cool, refreshing milk.
 * @constructor
 * @augments DairyProduct
 */
function Milk() {}

/**
 * Check whether milk is solid at room temperature.
 * @return {boolean} Always returns false.
 */
Milk.prototype.isSolid = function () {
  return false;
};

// Todo {
// 	아이디(required),
// 	내용(required),
// 	완료여부(required),
// 	카테고리(required),
// 	태그들(optional),
//   }

// CreateToDo {
// 	content(required),
// 	category(required),
//   }

// Read {
// 	id(required),
//   }

//   Update {
// 	id(required),
// 	content(required),
// 	completed(required),
// 	category(required),
// 	tag(optional),
//   }

//   Delete {
// 	id(required),
// 	tag(optional),
//   }

/**
 * Create ToDoList
 * @param {string} content - Todo content
 * @param {string} category - Todo category
 */
function Create(content, category) {}

/**
 * Read ToDoList
 * @param {string} id - Todo id
 *
 */
function Read(id) {}

/**
 * Update ToDoList
 * @param {string} id - Todo id
 * @param {string} content - Todo content
 * @param {string} category - Todo category: ;
 * @param {string} completed - Todo completed
 * @param {string} tag - Todo tag
 */
function Update(id, content, category, completed, tag) {}

/**
 * Delete ToDoList
 * @param {string} id - Todo id
 */
function Delete(id) {}

/**
 * Delete ToDoList Tag
 * @param {string} id - Todo id
 *
 */
function DeleteTag(id, tag) {}
