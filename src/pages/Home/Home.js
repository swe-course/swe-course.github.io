import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';
import Heavy from '../../media/heavy.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      topics: [
        {
          "title": "Motivation",
          "text": [
            "Extremelly high rate of changes in IT brigs up next challange: young engineers miss fundamental ideas, principles and invariants in Software Development domain.",
            "'Ten thousands hours rule' seems like not working any more. You need much more time to see big picture.",
            "That is why the main goal of the course is help to develop strong understanding of modern software development process, discovery key sources of complexity and be aligned with IT trends."
          ],
          "points": [
          ]
        },
        {
          "title": "Target audience",
          "text": [
            "IT engineers are involved into software development process (junior/junior+)"
          ],
          "points": [
            "Developers",
            "QA specialists",
            "Devops, SRE",
            "Support specialists"
          ]
        },
        {
          "title": "Deliverables",
          "text": [
            "Participants will"
          ],
          "points": [
            "become familiar with modern SDLC (Software Development Life Cycle), including Git SCM (Source Control Management), code review process, Pull Request/Push builds, TDD (Test Driven Development)",
            "have detailed information about Release and Branching models, when and why use User Story Isolation, how to set up an effective collaboration ecosystem within development team",
            "be able to setup Continuous Integration subsystems based on Jenkins, configure integrations between Github, Jenkins, SonarQube & Nexus",
            "setup simple testing framework, including unit tests, end-to-end tests, smoke tests, build regression plan, configure SonarQube to work with code coverage and Quality Gates",
            "understand difference between Software Architecture & Software design, know how and when use different patterns and how to transform business inputs into technical terms. When is N-tier architecture better then Microservices and vise versa",
            "be able to build RESTful and GraphQL APIs, have strong understanding about Orthogonal API and how build it, decompose high-level tasks using Design Patterns",
            "develop mobile application using Cordova & HTML5 (iOS/Android)",
            "use docker as main delivery tool, play with Kubernetes to setup HA (High Availability) cluster based on Microservice Architecture",
            "gether Application level statistics using Prometheus, troubleshoot issues using ELK stack (Elasticsearch, Logstash, Kibana)"
          ]
        },
        {
          "title": "Course numbers",
          "text": [
            ""
          ],
          "points": [
            "Schedule: 4h per day, 2 times per week",
            "Optimal class size: 12-15 students",
            "Duration: "
          ]
        }
      ],
      sections: [
        {
          title: "Introduction",
          text: "Course overview, deliverables, collaboration mechanism, homeworks and tasks. Collect expectations, details about tech stacks. Define goals & KPIs.",
          visible: true,
          subsections: [
          ]
        },
        {
          title: "Continuous Integration",
          text: "Uncover modern software development process, discovery key artifacts, collaboration mechanisms, focus on source control management, job scheduler, code quality verification tools and storage for artifacts.",
          visible: true,
          durations: {
            practice: 45
          },
          subsections: [
            {
              title: "Source Control Management Systems - Git",
              inclass: "Setup ssh-based connection with remote VM, create bare git repository, play with commit, branch, remote, submodule, subtree, tag, stash, merge, rebase and log features.",
              homework: "",
              duration: 2
            },
            {
              title: "Branching & Release models",
              inclass: "Review pros & cons for mono-repo & multi-repo setup, discover gitflow as a basis for CI, become familiar with SaaS oriented release mode, push & drop concepts, discuss 12-factor framework and semantic versioning.",
              homework: "",
              duration: 2,
              level: 1
            },
            {
              title: "Jenkins",
              inclass: "Setup skeleton for pull-request/push CI build using Jenkins DSL and microservice repository.",
              homework: "Add naming convention status check.",
              duration: 2,
              level: 1,
              practice: 0.75
            },
            {
              title: "Github",
              inclass: "Integrate pull-requests based development workflow, discuss pros & cons for fork-based & master-repo-based approaches, setup status checks using web hooks.",
              homework: "",
              duration: 2
            }
          ]
        },
        {
          title: "Continuous Testing",
          text: "Code quality is one of the major artifacts in software development, especially when business side requires quick adaptation and short release cycle. What types of tests dev team should use, how to prevent regression when new code is pushed into repository, how code review can improve the quality of final product. This section will cover unit tests, e2e tests, tests planning code coverage and quality gates.",
          visible: false,
          subsections: [
            {
              title: "SonarQube, Code coverage, Instrumentalization",
              inclass: "Add static code analysis step indo CI flow as GitHub status check, upload unit tests code coverage, setup Quality Gates.",
              homework: "Create new Quality Gate profile, extend it with additional conditions.",
              duration: 2
            },
            {
              title: "Code review process, User Story Isolation mechanics",
              inclass: "",
              homework: "Setup Pull Request code review process.",
              duration: 2
            },
            {
              title: "TDD - Test Driven development",
              inclass: "Create nodejs based micro service for authentication, setup unit-tests infrastructure, add e2e tests and code coverage calculation.",
              homework: "",
              duration: 2,
              level: 1,
            },
            {
              title: "Test planning, Performance, Regression & Security testing, Vulnerability scanning, Automation e2e & UI testing, Manual testing",
              inclass: "Integrate third parties scan solution, create high level test plan, setup simple regression plan, define smoke tests scope.",
              homework: "",
              duration: 2,
              level: 1
            }
          ]
        },
        {
          title: "Software architecture",
          text: "Vast majority of the software today is XaaS based or oriented (SaaS, PaaS, IaaS, etc). Furthermore, every business domain adds tons of different requirements to the solutions. That is why every developer should be familiar with various types of software architecture and how to work with different quality factors to create a service, which meets customer's expectations and be able to evolve without full re-development.",
          visible: false,
          subsections: [
            {
              title: "Software external quality factors: correctness, robustness, extensibility, reusability, etc.",
              inclass: "Learn how quality factors define architecture and help to select optimal pattern, understand modern software development challenges, unfold software development evolution and trends.",
              homework: "",
              duration: 2,
              level: 1
            },
            {
              title: "Architecture types: Standalone, N-tier, SOA, Microservices, Serverless, Web-Queue-Worker, Event-driven architecture, Big Data/Big Compute",
              inclass: "What is software architecture? How does every architecture model help to address customer's challanges? When to use and how properly align whole development process with selected type. Hybrid solutions. Select optimal architecture for PoC.",
              homework: "",
              duration: 4,
              level: 2
            },
            {
              title: "Requirements gathering, Pre-sales, Estimates, RFI/RFP",
              inclass: "How is software development integrated into other businesses? How sales deparment work in software domain: product, oursource, outstaff. Define list of unique sales points for PoC, apply priorities, setup roadmap.",
              homework: "",
              duration: 2,
              level: 1
            }
          ]
        },
        {
          title: "Software design",
          image: "software-design.png",
          text: "Most of the best practises are invariant to the tech stacks. This section contains material aims to teach how to effectively use different instruments, like OOP, data structures, design graphical representation, distributed calculation etc. Current state of the art is Polyglot Persistence & Polyglot Programming, when developer should know how to use more than one tool or language.",
          visible: false,
          subsections: [
            {
              title: "General project organization structure, component model, multi-component management system, minimum viable templates",
              inclass: "Setup project repository structure. Build skeleton for initial set of microservices & DBs. Create basic scripts for DevOps flow.",
              homework: "",
              duration: 1,
              level: 1
            },
            {
              title: "Data structures, key programming paradigms: procedural, object-oriented, functional, logic. Compilers vs Interpreters, Processes & Threads",
              inclass: "Why do we need multiple computational model. Muli-paradigms languages. How do compiler & interpreter work. Key data structures. Big O notation.",
              homework: "",
              duration: 1
            },
            {
              title: "'The Clean Architecture', Designs patterns, GRASP, UML, C4 model, MVC(MVVM), BFF - Backend For Frontend",
              inclass: "define list of features for the test project, create high-level product's UML diagram(s)",
              homework: "",
              duration: 1,
              level: 1
            },
            {
              title: "Inheritance vs Composition vs Aggregation, Composition vs Decomposition, Documentation, Error handling",
              inclass: "Key integration options between components. Development process using up-down or down-up approaches. Swagger.",
              homework: "Setup CI steps to autogenerate & publish documentation",
              duration: 1
            },
            {
              title: "Polyglot programming, Polyglot persistence",
              inclass: "Java|Go based microservice for REST API.",
              homework: "",
              duration: 1
            },
            {
              title: "CAP Theorem (RDBMS, NoSQL, Graph DB) DB migration, Sharding",
              inclass: "why do we need more than one type of DBs, when to use specific type of DBs, create DB migration skeleton",
              homework: "",
              duration: 2,
              level: 2
            },
            {
              title: "Authentication and Authorization,  RBAC vs ABAC, OAuth",
              inclass: "Role Based Access Control. Attribute-Based Access Control select specific method or combination. Select predefined roles (SaaS admin, tenant admin etc.), Create initial access scheme",
              homework: "",
              duration: 2,
              level: 2
            },
            {
              title: "Message brokering",
              inclass: "Kafka as part of micro-services solution, communication process between services",
              homework: "",
              duration: 1,
              level: 1
            },
            {
              title: "Mobile-first, mobile-only",
              inclass: "Add mobile application using Cordova",
              homework: "",
              duration: 1
            },
            {
              title: "Multi-tenancy, Audit, Branding, GDPR Compliance",
              inclass: "",
              homework: "",
              duration: 2,
              level: 3
            },
            {
              title: "Waterfall, RUP, Agile, Technical debt, Legacy systems, Refactoring",
              inclass: "every approach strong and weak points. Discovery major sources of technical debt. How does legacy system form. Software maintenance & evolution. Refactoring as main tool for solving complex problems.",
              homework: "",
              duration: 1,
              level: 1
            },
            {
              title: "Multithreading, Client-Server, P2P, Distributed computing, Lock-free algorithms, Caching, Journaling, Metaprogramming/Generics, Interprocess communication: mutex, semaphore, pipe, shared memory",
              inclass: "",
              homework: "",
              duration: 2,
              level: 3
            },
          ]
        },
        {
          title: "API",
          text: "Like in real world, software components should communicate to generate value. It's not straightforward to build clean, orthogonal communication channel or API - Application Programming Interface. This subset of lectures will unfold how communication is done at different levels of software, how to manage requirements for enterprise solutions and why it's so important to spend dev time designing APIs.",
          visible: false,
          subsections: [
            {
              title: "Orthogonal API, Contract programming, SOLID, ACIS",
              inclass: "",
              homework: "",
              duration: 2
            },
            {
              title: "RESTful API, OpenAPI, GraphQL, gRPC, API deprecation strategy",
              inclass: "",
              homework: "",
              duration: 2,
              level: 1
            },
            {
              title: "API management, API versioning, Pagination, Rate limits, Search",
              inclass: "Elasticsearch based microservice, configurable rate limits, (KONG, APIGee)",
              homework: "build CRUD for search API",
              duration: 3,
              level: 2
            },
            {
              title: "AI (ML/DL) overview",
              inclass: "tensorflow.js as part of frontend service",
              homework: "",
              duration: 1,
              level: 1
            }
          ]
        },
        {
          title: "Continuous Delivery",
          image: "continuous-delivery.png",
          text: "Modern software development process is very complex system by itself. A lot of types of artifacts are involved into different development, testing and deployment flows. Source code is only one part of it. We will focus on Docker and satellite technologies, since this ecosystem is standard de facto now. How to package your application, how to deliver it to users (other developers, test engineers, devops, customers) will be our main items here",
          visible: false,
          subsections: [
            {
              title: "Artifacts repository",
              inclass: "Nexus repository, artifact upload, standalone docker registry, docker registry as part of Nexus",
              homework: "setup Harbor",
              duration: 2
            },
            {
              title: "NoOps, Opsless, Dev/Prod parity, Infrastructure-as-Code",
              inclass: "",
              homework: "",
              duration: 2
            },
            {
              title: "Docker, Docker compose, containerd",
              inclass: "dockerize test project, multistage dockerfile",
              homework: "",
              duration: 4,
              level: 2
            }
          ]
        },
        {
          title: "Continuous Deployment",
          text: "One of the key attributes of the mature development environment is how quickly team can deploy any version of software using source code only. This extremely helpful when you need to work with customer's escalation. That is why smooth deployment process really shines saving huge amount of development time and helping very much to reduce costs",
          visible: false,
          subsections: [
            {
              title: "Different types of environments (dev, qa, uat, prod)",
              inclass: "",
              homework: "",
              duration: 1
            },
            {
              title: "Blue/Green, A/B, Canary deployment, 0-downtime, Rolling updates 'Follow the sun' strategy",
              inclass: "setup blue/green deployment",
              homework: "",
              duration: 3,
              level: 3
            },
            {
              title: "Environment variables, secrets, vaults",
              inclass: "",
              homework: "",
              duration: 1,
              level: 2
            },
            {
              title: "Kubernetes, Service mesh (Istio, Maesh/Linkerd, Anthos) overview",
              inclass: "",
              homework: "",
              duration: 3,
              level: 3
            }
          ]
        },
        {
          title: "Continuous Operation",
          text: "Near 40% of software costs are maintenance. This includes support your service at production side and work with issues from the customers. This section will cover the main tools & solutions from operations area and what and how developer should add into application during development stage to make life a little bit easier for SRE engineers and L1/L2/L3 support teams",
          visible: false,
          subsections: [
            {
              title: "Monitoring, Measuring, Alerting",
              inclass: "ELK cluster, collecting logs from microservices using Prometheus",
              homework: "",
              duration: 5,
              level: 2
            },
            {
              title: "Backup, Recovery strategy, Support (L1/L2/L3)",
              inclass: "",
              homework: "",
              duration: 2,
              level: 2
            },
            {
              title: "SRE, SLIs, SLOs, SLAs",
              inclass: "",
              homework: "",
              duration: 1
            }
          ]
        },
        {
          title: "Clouds",
          image: "clouds.png",
          text: "Now, we can definitely say that On-Demand is major software delivery mechanism. Of course On-Premise type of deployment will exist, but in specific cases and for specific type of sensitive data. The main role in this transformation plays virtualization at hardware and software levels. We can see that even development itself uses cloud solutions to simplify DevOps activities. Cloud era also brings new architecture patterns which help to deal with tremendous complexity of Hybrid Cloud applications. These and other trends will be our topics in Clouds section",
          visible: false,
          subsections: [
            {
              title: "Virtualization, Hardware level/User level",
              inclass: "",
              homework: "",
              duration: 2,
              level: 1
            },
            {
              title: "Cloud platforms overview, Hybrid Clouds solutions, Zones",
              inclass: "AWS, Azure, Google Cloud, Digital Ocean overview",
              homework: "",
              duration: 2,
              level: 2
            },
            {
              title: "High Availability, Cloud Architecture patterns",
              inclass: "review different architectures",
              homework: "",
              duration: 4,
              level: 3
            }
          ]
        }
      ]
    }
    this.state.sections.forEach((section, si) => {
      section.duration = 0;
      section.subsections.forEach((subsection, ssi) => {
        section.duration += subsection.duration;
      });
      this.state.duration += section.duration;
    });
    this.state.topics[3].points[2] += this.state.duration + 'h';
  }

  componentDidMount() {/*
    this.originBodyClass = document.body.className;
    console.log(this.originBodyClass);  //Just in-case to check if your code is working or not
    document.body.className = this.originBodyClass + (this.originBodyClass ? ' ' : '') + 'container-fluid p-0 h-100'; //Here gray-by is the bg color which I have set
    */
  }

  componentWillUnmount() {
    /*
    document.body.className = this.originBodyClass;
    */
  }

  renderTopics() {
    return this.state.topics.map((topic, ti) => {
      const last = ti === this.state.topics.length - 1;
      const { title, text, points } = topic;
      //
      return (
        <div key={ti.toString()}>
          <div className="container-fluid">
            <div className="row">
              <div className="col p-0">
                <h2 className="display-5">{title}</h2>
              </div>
            </div>
          </div>
          {text.map((t, ti) => <p key={ti.toString()}>{t}</p>)}              
          <ul>
            {points.map((p, pi) => <li key={pi.toString()}>{p}</li>)}              
          </ul>
          {last ? <div/>: <hr className="my-4" />}
        </div>
      )
    })
  }

  renderSections() {
    return (
      <div className="container-fluid">
        <div className="row">
          {
            this.state.sections.map((section, si) => {
              const { title, text, visible, duration, subsections } = section;
              return (
                <div key={si.toString()} className="col-12">
                  <div className="conainer-fluid">
                    <div className="row pt-5">
                      <div className="col h5">{si} - {title} {(!!duration) && (<span className="badge badge-pill badge-light">{duration}h</span>)}</div>
                    </div>
                    <div className="row">
                      <div className="col">{text}</div>
                    </div>
                      {visible && subsections.map((subsection, ssi) => 
                        <div key={ssi.toString()} className="row m-0 pt-2">
                          <div className="col-1 p-1 bg-light text-center">{si}.{ssi+1}</div>
                          <div className="col p-1"><span className="font-weight-bold">{subsection.title}</span>
                          {subsection.level && Array.from(Array(subsection.level)).map((e, i) => <img key={i} className="Heavy__logo float-right" src={Heavy} alt=""/>)}
                          <div>
                             {(subsection.inclass) && (<span className="badge badge-pill badge-light">in class</span>)} <span className="">{subsection.inclass}</span>
                            </div>
                            <div>
                              {(subsection.homework) && (<span className="badge badge-pill badge-light">homework</span>)} <span className="">{subsection.homework}</span>
                            </div>
                          </div>
                          <div className="col-1 p-1 text-center bg-light">{subsection.duration}h</div>
                        </div>
                        )}
                    { (subsections.length !== 0) && (<div className="row p-0 m-0">
                      <div className="col text-center">
                        <button className="btn btn-link text-info p-0" onClick={() => { section.visible = !section.visible; this.forceUpdate();} }>
                          <span className="small">{section.visible?(<ArrowDropUpIcon/>):(<ArrowDropDownIcon/>)}{section.visible?'less':'more'}</span>
                        </button>
                      </div>
                    </div> )}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="">
        <div className="jumbotron bg-light border-0 rounded-0 pb-4 pt-4 mb-0">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-sm-2 col-sm-8">
                {this.renderTopics()}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pb-2 pt-0">
          <div className="row">
            <div className="offset-sm-2 col-sm-8">
              {this.renderSections()}
            </div>
          </div>
        </div>
        <div className="jumbotron bg-light border-0 rounded-0 m-0 mt-4 pb-2">
          <div className="container-fluid">
            <div className="row text-center">
              {[
                  { 
                    icon: FaceIcon,
                    text: 'As an individual engineer you can go to the calendar section and book seat for the nearest upcoming training',
                    linkRef: '/calendar',
                    linkText: 'Book'
                  },
                  { 
                    icon: BusinessIcon,
                    text: 'As a company representative you can request full course or specific subset of lectures which meets your requirements the best',
                    linkRef: '/calendar',
                    linkText: 'Request'
                  }
                ].map((t, ti) => 
                  <div key={ti.toString()} className={(ti === 0 ? "offset-sm-2": "") + " col-sm-4 pb-5"}>
                    <div><Icon component={t.icon} style={{ fontSize: 64 }}></Icon></div>
                    <p className="p-2">{t.text}</p>
                    <Link to={t.linkRef} className="text-decoration-none">
                      <div className="ml-4 pr-4">
                        <button type="button" className="btn btn-info btn-block" disabled>{t.linkText}</button>
                      </div>
                    </Link>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}