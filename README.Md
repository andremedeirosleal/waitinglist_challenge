# WAITING LIST FOR PATIENTS

A smart listing of patients waiting for appointment, based on ordenation of their calculated score.

## Getting Started

Using the GET method for the api's hosting address ("localhost: 8080" in this case), coordinate parameters referring to the facility should be passed in order to obtain an ordered list of 10 patients most likely to accept an medical appointment.

### Prerequisites

To execute NodeJS ("Node app.js"), have all the dependecies installed (Example: "npm i express"). have mysql database hosted in some server (Needed SQL instructions are stored in "documentation" folder)

```
"dependencies": {
    "express": "^4.17.1",
    "geo-distance": "^0.2.0",
    "mysql": "^2.18.1",
    "request": "^2.88.2"
}
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
