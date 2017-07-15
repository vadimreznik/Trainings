class Course{

	topics: Array<any> = [];
	name: string = '';

	constructor(name: string){

		this.name = name;
		
	}

	getTopics(){
		return this.topics;
	}

	addTopic(title: string, fileName: string){

		let topic = new Topic(title, fileName);
		this.topics.push(topic);
		
	}

	updateTopic(){}

	removeTopic(){}
}

class Topic{

	title: string;
	fileName: string;
	content: Content;

	constructor(title: string, fileName?: string){
		
		this.title = title;

		this.fileName = fileName;
		
	}

	setContent(content: string){

		this.content = new Content(this.fileName, content);
		
	}

	getContent(){
	
		return this.content;
	
	}
	
	

}

class Content{

	fileName: string;
	fileContent: string;

	constructor(fileName: string, fileContent: string){
	
		this.fileName = fileName;
		this.fileContent = fileContent;

	}

	saveToFile(){
	
	}

	showAsRaw(){}

	showAsCompiled(){}

}


class App{

	courses: Array<any> = [];
	name: string = '';
	version: number = 0;

	constructor(name: string, version: number){
	
		this.name = name;
		this.version = version;
		
	}

	getCourses(){
	
		return this.courses;
		
	}

	addCourse(name: string){

		this.courses.push(new Course(name))
	
	}

	udpateCourse(){}

	removeCourse(){}
	

}

const app = new App('its', 0.1);
