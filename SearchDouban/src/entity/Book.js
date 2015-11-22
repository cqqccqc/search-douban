class Book  {
  	constructor(alt, alt_title, author, author_intro, binding, catalog,
				id, image, images, isbn10, isbn13, origin_title, pages,
				price, pubdate, publisher, rating, subtitle, summary, tags
				title, translator, url) {
  		var args = Array.from(arguments);
  		args.forEach(item => {
  			this[item] = item;
  		});
	}
}

class Images  {
  	constructor(large, medium, small) {
    	this.large = large;
    	this.medium = medium;
    	this.small = small;
  	}
}

class Rating {
	constructor(average, max, min) {
		this.average = average;
		this.max = max;
		this.min = min;
	}

}
Book.Images = Images;
Book.Rating = Rating;
module.exports = Book;