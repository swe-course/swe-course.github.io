import React from 'react';
import './Links.css';
import { Link } from 'react-router-dom';
import BasePage from './../BasePage/BasePage';

export default class Calendar extends BasePage {
  constructor(props){
    super(props);
    this.pageName = 'Calendar';
    this.state = {
      links: [
        {
          title: 'Semantic Versioning',
          url: 'https://semver.org/'
        },
        {
          title: 'The Twelve-Factor App',
          url: 'https://12factor.net/'
        },
        {
          title: 'A successful Git branching model',
          url: 'https://nvie.com/posts/a-successful-git-branching-model/'
        },
        {
          title: 'Code review',
          url: 'https://habr.com/ru/post/453968/'
        },
        {
          title: 'Validation & Verification',
          url: 'https://www.easterbrook.ca/steve/2010/11/the-difference-between-verification-and-validation/'
        },
        {
          title: 'Polyglot Programming/Persistence',
          url: 'https://martinfowler.com/bliki/PolyglotPersistence.html'
        },
        {
          title: 'Application Architecture',
          url: 'https://docs.microsoft.com/en-us/azure/architecture/guide/'
        },
        {
          title: 'Security Development Lifecycle (SDL)',
          url: 'https://www.microsoft.com/en-us/securityengineering/sdl/'
        },
        {
          title: 'DevOps Vs. SRE',
          url: 'https://www.youtube.com/watch?v=0UyrVqBoCAU'
        },
        {
          title: 'Oracle Database 12.2 bug fixing cycle',
          url: 'https://news.ycombinator.com/item?id=18442941'
        },
        {
          title: 'What Is Microservices Architecture?',
          url: 'https://medium.com/fintechexplained/what-is-microservices-architecture-1da41a94a29b'
        },
        {
          title: 'Why our team cancelled our move to microservices',
          url: 'https://medium.com/@steven.lemon182/why-our-team-cancelled-our-move-to-microservices-8fd87898d952'
        },
        {
          title: 'What is Rapid Application Development and When Should You Use It?',
          url: 'https://blog.capterra.com/what-is-rapid-application-development/'
        },
        {
          title: 'Serverless',
          url: 'https://martinfowler.com/articles/serverless.html'
        },
        {
          title: 'Load balancing & proxying',
          url: 'https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236'
        }
      ]
    }
  }
  render() {
    return (
      <div className="container-fluid pt-2">
        <div className="row text-left">
          {this.state.links.map((l, li) => 
            <div key={li.toString()} className="offset-sm-3 col-sm-6 p-1">
              <a href={l.url} target="_blank" className="text-decoration-none text-secondary">{l.title}</a>
            </div>
           )}
        </div>
      </div>
    )
  }
}