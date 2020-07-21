import React from 'react';
import './Links.css';
//import { Link } from 'react-router-dom';
import BasePage from './../BasePage/BasePage';


// GitOps - https://www.weave.works/blog/gitops-operations-by-pull-request

export default class Calendar extends BasePage {
  constructor(props){
    super(props);
    this.pageName = 'Calendar';
    this.state = {
      sections: [
        {
          title: 'Fundamentals',
          links: [
            {
              title: 'Semantic Versioning',
              url: 'https://semver.org/',
              tags: ['sdlc', 'release management']
            },
            {
              title: 'The Twelve-Factor App',
              url: 'https://12factor.net/',
              tags: ['sdlc']
            },
            {
              title: 'A successful Git branching model',
              url: 'https://nvie.com/posts/a-successful-git-branching-model/',
              tags: ['scm']
            },
            {
              title: 'Validation & Verification',
              url: 'https://www.easterbrook.ca/steve/2010/11/the-difference-between-verification-and-validation/',
              tags: ['sdlc', 'qa']
            },
            {
              title: 'What is Rapid Application Development and When Should You Use It?',
              url: 'https://blog.capterra.com/what-is-rapid-application-development/',
              tags: ['sdlc']
            }
          ]
        },
        {
          title: 'Software Architecture, Design & Patterns',
          links: [
            {
              title: 'Polyglot Programming/Persistence',
              url: 'https://martinfowler.com/bliki/PolyglotPersistence.html',
              tags: ['reusability']
            },
            {
              title: 'Software Architecture - The Difference Between Architecture and Design',
              url: 'https://codeburst.io/software-architecture-the-difference-between-architecture-and-design-7936abdd5830',
              tags: []
            },
            {
              title: 'Application Architecture',
              url: 'https://docs.microsoft.com/en-us/azure/architecture/guide/',
              tags: ['']
            },
            {
              title: 'Backends For Frontends',
              url: 'https://samnewman.io/patterns/architectural/bff/',
              tags: ['api', 'decomposition']
            },
            {
              title: 'The Clean Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
              tags: ['decomposition']
            },
            {
              title: 'What Is Microservices Architecture?',
              url: 'https://medium.com/fintechexplained/what-is-microservices-architecture-1da41a94a29b',
              tags: []
            },
            {
              title: 'Microservice Architecture and Design Patterns for Microservices',
              url: 'https://medium.com/@madhukaudantha/microservice-architecture-and-design-patterns-for-microservices-e0e5013fd58a',
              tags: []
            },
            {
              title: 'Serverless',
              url: 'https://martinfowler.com/articles/serverless.html',
              tags: []
            },
            {
              title: 'Domain-Driven Design',
              url: 'https://www.softwarearchitekt.at/aktuelles/sustainable-angular-architectures-1/',
              tags: []
            },
            {
              title: 'C4 model',
              url: 'https://c4model.com/',
              tags: []
            }
          ]
        },
        {
          title: 'Practise',
          links: [
            {
              title: 'DevOps Vs. SRE',
              url: 'https://www.youtube.com/watch?v=0UyrVqBoCAU',
              tags: []
            },
            {
              title: 'Oracle Database 12.2 bug fixing cycle',
              url: 'https://news.ycombinator.com/item?id=18442941',
              tags: []
            },
            {
              title: 'Why our team cancelled our move to microservices',
              url: 'https://medium.com/@steven.lemon182/why-our-team-cancelled-our-move-to-microservices-8fd87898d952',
              tags: []
            },
            {
              title: 'Load balancing & proxying',
              url: 'https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236',
              tags: ['high availability']
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className="container-fluid pb-4">
        {this.state.sections.map((s, si) => 
          <div key={si.toString()} className="row text-left p-1">
            <div className="h6 offset-sm-3 col-sm-6 border-bottom p-0 pb-1 pt-4">
              <span className="">{s.title}</span>
            </div>
            {s.links.map((l, li) => 
              <div key={li.toString()} className="offset-sm-3 col-sm-6 p-1">
                {l.tags.map((t, ti) => 
                  <span key={ti.toString()} class="badge badge-light float-right text-secondary">{t}</span>
                )}
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">{l.title}</a>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}
