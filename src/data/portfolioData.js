// Central data source for the entire portfolio
// Update this file to modify information across all components

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Raj Kunwar Singh",
    title: "Software Engineer",
    email: "rajkunwar.it@gmail.com",
    phone: "+91 7974709460",
    location: "Delhi, India",
    website: "https://rajkunwar-portfolio-mdsr.vercel.app",
    handle: "ra_jkunwar",
    status: "Available for work",
    avatarUrl: "/self.png",
    resumeUrl: "/RajKunwarSingh.pdf"
  },

  // Social Links
  social: {
    github: "https://github.com/ra-jkunwar",
    linkedin: "https://www.linkedin.com/in/raj-kunwar-singh-7593641a6/",
    instagram: "https://www.instagram.com/kun_war_raj"
  },

  // Hero Section
  hero: {
    greeting: "Hey! It's me Raj, I'm a",
    typewriterTexts: [
      'Software Engineer',
      'Backend Developer', 
      'Full-Stack Developer',
      'Python Developer',
      'Django Expert'
    ],
    headline: {
      line1: "Crafting efficient",
      line2: "backend solutions",
      line3: "& scalable systems."
    },
    description: "Software Engineer with 2+ years of experience specializing in backend development, API design, and building scalable web applications using Python, Django, and modern technologies."
  },

  // Tech Stack (for floating icons)
  techStack: [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎯' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'AWS', icon: '☁️' }
  ],

  // About Section
  about: {
    typewriterTexts: [
      'the Developer',
      'the Person', 
      'My Story',
      'My Journey'
    ],
    description: "Discover my professional journey, current activities, and what drives me as a developer. Connect with me and explore opportunities to work together.",
    mission: "To develop efficient backend solutions and scalable web applications that solve complex business problems. I focus on writing clean, maintainable code and delivering high-quality software solutions.",
    passion: "Clean code, system design, mentoring developers, and exploring new technologies. I'm passionate about performance optimization and building robust architectures.",
    values: [
      "Quality over quantity",
      "Continuous learning",
      "Team collaboration",
      "User-first approach"
    ]
  },

  // Work Experience
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "OneShield Software",
      companyLogo: "🛡️",
      location: "Remote",
      duration: "Aug 2022 — Present",
      period: "2+ Years",
      type: "Full-time",
      status: "Current",
      description: "Developing and maintaining enterprise insurance software solutions with focus on backend systems, API design, and performance optimization for mission-critical applications.",
      highlights: [
        "Built RESTful APIs and backend services using Python and Django",
        "Integrated third-party APIs and payment gateways like Stripe",
        "Optimized database queries improving application performance by 30%",
        "Collaborated with cross-functional teams using Agile methodologies"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Git", "REST APIs"],
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "OneShield Software",
      companyLogo: "🛡️",
      location: "Remote",
      duration: "Feb 2022 — Jul 2022",
      period: "6 Months",
      type: "Internship",
      status: "Completed",
      description: "Gained hands-on experience in enterprise software development, working on various features and learning industry best practices under senior developer mentorship.",
      highlights: [
        "Developed features for enterprise insurance management system",
        "Learned Django framework and enterprise development practices",
        "Participated in code reviews and team development processes",
        "Successfully transitioned to full-time role after internship completion"
      ],
      technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "PostgreSQL", "Git"],
      gradient: "from-purple-500 to-blue-500",
      featured: false
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Freelance Projects",
      companyLogo: "💻",
      location: "Remote",
      duration: "2021 — 2022",
      period: "1 Year",
      type: "Freelance",
      status: "Completed",
      description: "Delivered custom web solutions for various clients, focusing on responsive design, user experience, and backend functionality across different industry domains.",
      highlights: [
        "Built responsive web applications using modern frameworks",
        "Implemented e-commerce solutions with payment integration",
        "Created admin dashboards and content management systems",
        "Maintained high client satisfaction with timely project delivery"
      ],
      technologies: ["React", "JavaScript", "Python", "Django", "HTML/CSS", "Bootstrap"],
      gradient: "from-green-500 to-emerald-500",
      featured: false
    }
  ],

  // Technical Skills
  skills: [
    // Languages
    {
      name: 'Python',
      category: 'languages',
      mastery: 95,
      icon: '🐍',
      color: 'bg-yellow-500',
      description: 'Primary backend language with 2+ years professional experience'
    },
    {
      name: 'JavaScript',
      category: 'languages',
      mastery: 85,
      icon: '⚡',
      color: 'bg-yellow-400',
      description: 'Frontend development and DOM manipulation'
    },
    {
      name: 'HTML',
      category: 'languages',
      mastery: 90,
      icon: '🌐',
      color: 'bg-orange-500',
      description: 'Semantic markup and modern HTML5 features'
    },
    {
      name: 'CSS',
      category: 'languages',
      mastery: 85,
      icon: '🎨',
      color: 'bg-blue-500',
      description: 'Modern CSS, Flexbox, Grid, and responsive design'
    },
    {
      name: 'SQL',
      category: 'languages',
      mastery: 80,
      icon: '📊',
      color: 'bg-green-500',
      description: 'Database querying and optimization'
    },

    // Frameworks & Libraries
    {
      name: 'Django',
      category: 'frameworks',
      mastery: 95,
      icon: '🎯',
      color: 'bg-green-600',
      description: 'Primary backend framework for web applications'
    },
    {
      name: 'React',
      category: 'frameworks',
      mastery: 80,
      icon: '⚛️',
      color: 'bg-blue-400',
      description: 'Component-based frontend development'
    },
    {
      name: 'Bootstrap',
      category: 'frameworks',
      mastery: 85,
      icon: '🅱️',
      color: 'bg-purple-500',
      description: 'Responsive CSS framework for rapid development'
    },
    {
      name: 'Django REST',
      category: 'frameworks',
      mastery: 90,
      icon: '🔗',
      color: 'bg-green-500',
      description: 'Building powerful REST APIs with Django'
    },

    // Databases
    {
      name: 'PostgreSQL',
      category: 'databases',
      mastery: 85,
      icon: '🐘',
      color: 'bg-blue-600',
      description: 'Primary database for production applications'
    },
    {
      name: 'MySQL',
      category: 'databases',
      mastery: 80,
      icon: '🐬',
      color: 'bg-orange-600',
      description: 'Relational database management and optimization'
    },
    {
      name: 'Redis',
      category: 'databases',
      mastery: 75,
      icon: '🔴',
      color: 'bg-red-500',
      description: 'Caching and session management'
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      category: 'cloud',
      mastery: 75,
      icon: '☁️',
      color: 'bg-orange-500',
      description: 'Cloud deployment and infrastructure management'
    },
    {
      name: 'Git',
      category: 'cloud',
      mastery: 90,
      icon: '🔧',
      color: 'bg-gray-600',
      description: 'Version control and collaborative development'
    },
    {
      name: 'Docker',
      category: 'cloud',
      mastery: 70,
      icon: '🐳',
      color: 'bg-blue-500',
      description: 'Containerization and deployment'
    },

    // Tools & Others
    {
      name: 'REST APIs',
      category: 'tools',
      mastery: 90,
      icon: '🔌',
      color: 'bg-green-500',
      description: 'API design and integration'
    },
    {
      name: 'Stripe',
      category: 'tools',
      mastery: 80,
      icon: '💳',
      color: 'bg-purple-600',
      description: 'Payment processing and e-commerce integration'
    },
    {
      name: 'Agile',
      category: 'tools',
      mastery: 85,
      icon: '🔄',
      color: 'bg-indigo-500',
      description: 'Agile methodologies and team collaboration'
    },
    {
      name: 'Linux',
      category: 'tools',
      mastery: 75,
      icon: '🐧',
      color: 'bg-gray-700',
      description: 'Server administration and command line tools'
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Guru Gobind Singh Indraprastha University",
      duration: "2020 - 2024",
      grade: "8.2/10 CGPA",
      location: "Delhi, India"
    }
  ],

  // Certifications
  certifications: [
    "Django Web Development",
    "Python Programming",
    "Web Development Fundamentals"
  ],

  // Resume Data
  resume: {
    summary: "Passionate software engineer with expertise in building scalable backend systems and modern web applications. Specialized in Python, Django, and cloud technologies with a strong focus on performance optimization and clean code architecture.",
    highlights: [
      "Led development of microservices architecture serving 10,000+ daily users",
      "Reduced API response time by 40% through database optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 5+ junior developers in best practices and code review"
    ]
  },

  // Blog Data
  blogs: [
    {
      id: 1,
      title: "Building Scalable APIs with Django REST Framework",
      slug: "building-scalable-apis-django-rest-framework",
      excerpt: "Learn how to build robust and scalable REST APIs using Django REST Framework with best practices for authentication, serialization, and performance optimization.",
      content: `# Building Scalable APIs with Django REST Framework

Building scalable APIs is crucial for modern web applications. In this comprehensive guide, I'll walk you through the best practices for creating robust REST APIs using Django REST Framework (DRF).

## Why Django REST Framework?

Django REST Framework provides a powerful and flexible toolkit for building Web APIs. Here are some key advantages:

- **Powerful serialization** that supports both ORM and non-ORM data sources
- **Customizable all the way down** - just use regular function-based views if you don't need the more powerful features
- **Extensive documentation** and great community support
- **Used by internationally recognised companies** including Mozilla, Red Hat, Heroku, and Eventbrite

## Setting Up Your First API

Let's start with a simple example. First, install Django REST Framework:

\`\`\`bash
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API
pip install django-filter  # Filtering support
\`\`\`

Add it to your INSTALLED_APPS:

\`\`\`python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'rest_framework.authtoken',  # For token authentication
]
\`\`\`

## Creating Your First Serializer

Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes:

\`\`\`python
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
\`\`\`

## Best Practices for Performance

1. **Use select_related and prefetch_related** to avoid N+1 queries
2. **Implement pagination** for large datasets
3. **Use caching** for frequently accessed data
4. **Optimize database queries** with proper indexing

\`\`\`python
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.select_related('author').prefetch_related('tags')
    serializer_class = ArticleSerializer
    pagination_class = StandardResultsSetPagination
\`\`\`

## Conclusion

Django REST Framework provides excellent tools for building scalable APIs. By following these best practices, you can create robust and performant APIs that will serve your applications well as they grow.`,
      author: "Raj Kunwar Singh",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "Backend Development",
      tags: ["Django", "Python", "REST API", "Backend", "Web Development"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Modern React Patterns: Hooks and Context",
      slug: "modern-react-patterns-hooks-context",
      excerpt: "Explore advanced React patterns using hooks and context API to build maintainable and scalable frontend applications.",
      content: `# Modern React Patterns: Hooks and Context

React has evolved significantly over the years, and with the introduction of hooks, we've seen a paradigm shift in how we write React components. Let's explore some modern patterns that can help you build better React applications.

## The Power of Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. Here's a practical example:

\`\`\`javascript
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Context for Global State Management

The Context API provides a way to pass data through the component tree without having to pass props manually at every level:

\`\`\`javascript
import React, { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { isDark: false });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
\`\`\`

## Performance Optimization with useMemo and useCallback

These hooks help prevent unnecessary re-renders:

\`\`\`javascript
import React, { useMemo, useCallback } from 'react';

function ExpensiveComponent({ items, onItemClick }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  const handleClick = useCallback((item) => {
    onItemClick(item.id);
  }, [onItemClick]);

  return (
    <div>
      <p>Total: {expensiveValue}</p>
      {items.map(item => (
        <button key={item.id} onClick={() => handleClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
\`\`\`

## Conclusion

Modern React patterns with hooks and context provide powerful ways to build maintainable applications. By leveraging these patterns, you can create more reusable and efficient components.`,
      author: "Raj Kunwar Singh",
      publishedAt: "2024-01-10",
      readTime: "6 min read",
      category: "Frontend Development",
      tags: ["React", "JavaScript", "Hooks", "Context API", "Frontend"],
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Database Optimization Strategies for High-Traffic Applications",
      slug: "database-optimization-high-traffic-applications",
      excerpt: "Learn essential database optimization techniques to handle high-traffic scenarios and improve application performance.",
      content: `# Database Optimization Strategies for High-Traffic Applications

When your application starts receiving significant traffic, database performance becomes critical. Here are proven strategies to optimize your database for high-traffic scenarios.

## Understanding Database Performance Bottlenecks

Common performance issues include:

- **Slow queries** due to missing indexes
- **Lock contention** from concurrent transactions
- **Connection pool exhaustion**
- **Inefficient query patterns**

## Indexing Strategies

Proper indexing is crucial for query performance:

\`\`\`sql
-- Create composite indexes for common query patterns
CREATE INDEX idx_user_posts_created 
ON posts (user_id, created_at DESC);

-- Partial indexes for filtered queries
CREATE INDEX idx_active_users 
ON users (email) 
WHERE is_active = true;
\`\`\`

## Query Optimization

Always analyze your queries:

\`\`\`sql
-- Use EXPLAIN to understand query execution
EXPLAIN ANALYZE 
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at > '2023-01-01'
GROUP BY u.id, u.name
ORDER BY post_count DESC;
\`\`\`

## Connection Pooling

Implement proper connection pooling:

\`\`\`python
# Django settings for connection pooling
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'myproject',
        'USER': 'myuser',
        'PASSWORD': 'mypassword',
        'HOST': '127.0.0.1',
        'PORT': '5432',
        'CONN_MAX_AGE': 600,  # Connection pooling
        'OPTIONS': {
            'MAX_CONNS': 20,
        }
    }
}
\`\`\`

## Caching Strategies

Implement multiple levels of caching:

1. **Application-level caching** with Redis
2. **Query result caching**
3. **Database query plan caching**

\`\`\`python
from django.core.cache import cache

def get_user_posts(user_id):
    cache_key = f"user_posts_{user_id}"
    posts = cache.get(cache_key)
    
    if posts is None:
        posts = Post.objects.filter(user_id=user_id).select_related('author')
        cache.set(cache_key, posts, timeout=300)  # 5 minutes
    
    return posts
\`\`\`

## Read Replicas and Sharding

For extreme scale:

- **Read replicas** for read-heavy workloads
- **Database sharding** for write-heavy workloads
- **Horizontal partitioning** for large tables

## Monitoring and Alerts

Set up monitoring for:

- Query execution time
- Connection pool usage
- Lock wait times
- Database CPU and memory usage

## Conclusion

Database optimization is an ongoing process. Start with proper indexing and query optimization, then scale with caching and replication as needed. Regular monitoring helps identify issues before they impact users.`,
      author: "Raj Kunwar Singh",
      publishedAt: "2024-01-05",
      readTime: "10 min read",
      category: "Database",
      tags: ["Database", "PostgreSQL", "Performance", "Optimization", "Scaling"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Implementing Microservices with Docker and Kubernetes",
      slug: "implementing-microservices-docker-kubernetes",
      excerpt: "A comprehensive guide to building and deploying microservices architecture using Docker containers and Kubernetes orchestration.",
      content: `# Implementing Microservices with Docker and Kubernetes

Microservices architecture has become the standard for building scalable, maintainable applications. This guide covers implementing microservices using Docker and Kubernetes.

## Understanding Microservices Architecture

Microservices break down applications into small, independent services that:

- **Communicate over well-defined APIs**
- **Can be developed and deployed independently**
- **Use different technologies and databases**
- **Scale independently based on demand**

## Containerizing Services with Docker

First, let's containerize a simple service:

\`\`\`dockerfile
# Dockerfile for a Python Flask service
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

## Docker Compose for Local Development

Use Docker Compose for local development:

\`\`\`yaml
version: '3.8'

services:
  user-service:
    build: ./user-service
    ports:
      - "5001:5000"
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/userdb
    depends_on:
      - postgres

  order-service:
    build: ./order-service
    ports:
      - "5002:5000"
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/orderdb
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: microservices
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

## Kubernetes Deployment

Deploy to Kubernetes with proper configurations:

\`\`\`yaml
# user-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: myregistry/user-service:latest
        ports:
        - containerPort: 5000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 80
    targetPort: 5000
  type: ClusterIP
\`\`\`

## Service Discovery and Communication

Implement service discovery:

\`\`\`python
import requests
import os

class ServiceDiscovery:
    def __init__(self):
        self.services = {
            'user-service': os.getenv('USER_SERVICE_URL', 'http://user-service:80'),
            'order-service': os.getenv('ORDER_SERVICE_URL', 'http://order-service:80'),
        }
    
    def call_service(self, service_name, endpoint, method='GET', data=None):
        url = f"{self.services[service_name]}{endpoint}"
        
        try:
            response = requests.request(method, url, json=data, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise ServiceUnavailableError(f"Failed to call {service_name}: {str(e)}")
\`\`\`

## Monitoring and Observability

Implement comprehensive monitoring:

\`\`\`yaml
# prometheus-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    scrape_configs:
    - job_name: 'kubernetes-pods'
      kubernetes_sd_configs:
      - role: pod
      relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
\`\`\`

## Best Practices

1. **Use health checks** for reliable deployments
2. **Implement circuit breakers** for fault tolerance
3. **Use proper logging and monitoring**
4. **Secure service-to-service communication**
5. **Implement proper data consistency patterns**

## Conclusion

Microservices with Docker and Kubernetes provide powerful scalability and maintainability benefits. Start small, focus on proper service boundaries, and invest in good monitoring and deployment practices.`,
      author: "Raj Kunwar Singh",
      publishedAt: "2023-12-28",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Microservices", "Docker", "Kubernetes", "DevOps", "Architecture"],
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Python Performance Optimization: From Basics to Advanced",
      slug: "python-performance-optimization-basics-advanced",
      excerpt: "Master Python performance optimization techniques from basic improvements to advanced profiling and optimization strategies.",
      content: `# Python Performance Optimization: From Basics to Advanced

Python's simplicity comes with performance trade-offs. This comprehensive guide covers optimization techniques from basic improvements to advanced strategies.

## Understanding Python Performance

Python performance bottlenecks typically arise from:

- **Interpreted nature** vs compiled languages
- **Global Interpreter Lock (GIL)** limiting parallelism
- **Dynamic typing** overhead
- **Memory management** inefficiencies

## Basic Optimization Techniques

### Use Built-in Functions

Built-in functions are implemented in C and are much faster:

\`\`\`python
# Slow
def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Fast
def sum_list_optimized(numbers):
    return sum(numbers)

# Even faster for large lists
import math
def sum_list_math(numbers):
    return math.fsum(numbers)  # More accurate for floats
\`\`\`

### List Comprehensions vs Loops

List comprehensions are generally faster:

\`\`\`python
# Slow
squares = []
for i in range(1000):
    squares.append(i ** 2)

# Fast
squares = [i ** 2 for i in range(1000)]

# Even faster with generator for memory efficiency
squares_gen = (i ** 2 for i in range(1000))
\`\`\`

## Advanced Optimization Strategies

### Using NumPy for Numerical Operations

\`\`\`python
import numpy as np
import time

# Pure Python
def python_sum(arr):
    return sum(arr)

# NumPy
def numpy_sum(arr):
    return np.sum(arr)

# Benchmark
large_list = list(range(1000000))
numpy_array = np.array(large_list)

# NumPy is typically 10-100x faster for numerical operations
\`\`\`

### Caching with functools.lru_cache

\`\`\`python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# This makes recursive fibonacci practical for larger numbers
\`\`\`

## Profiling Your Code

### Using cProfile

\`\`\`python
import cProfile
import pstats

def profile_function(func):
    profiler = cProfile.Profile()
    profiler.enable()
    result = func()
    profiler.disable()
    
    stats = pstats.Stats(profiler)
    stats.sort_stats('cumulative')
    stats.print_stats(10)  # Top 10 functions
    
    return result
\`\`\`

### Memory Profiling with memory_profiler

\`\`\`python
from memory_profiler import profile

@profile
def memory_intensive_function():
    # Large list creation
    big_list = [i for i in range(1000000)]
    
    # Dictionary operations
    big_dict = {i: i**2 for i in range(100000)}
    
    return len(big_list) + len(big_dict)
\`\`\`

## Concurrency and Parallelism

### Using multiprocessing for CPU-bound tasks

\`\`\`python
import multiprocessing as mp
from concurrent.futures import ProcessPoolExecutor

def cpu_intensive_task(n):
    return sum(i * i for i in range(n))

def parallel_processing():
    numbers = [100000, 200000, 300000, 400000]
    
    # Sequential
    start = time.time()
    results_seq = [cpu_intensive_task(n) for n in numbers]
    seq_time = time.time() - start
    
    # Parallel
    start = time.time()
    with ProcessPoolExecutor() as executor:
        results_par = list(executor.map(cpu_intensive_task, numbers))
    par_time = time.time() - start
    
    print(f"Sequential: {seq_time:.2f}s, Parallel: {par_time:.2f}s")
\`\`\`

### asyncio for I/O-bound tasks

\`\`\`python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_multiple_urls(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results
\`\`\`

## Memory Optimization

### Using __slots__ to reduce memory usage

\`\`\`python
class RegularClass:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class OptimizedClass:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# OptimizedClass uses ~40% less memory
\`\`\`

### Generators for Large Datasets

\`\`\`python
def read_large_file_bad(filename):
    with open(filename) as f:
        return f.readlines()  # Loads entire file into memory

def read_large_file_good(filename):
    with open(filename) as f:
        for line in f:  # Generator - one line at a time
            yield line.strip()
\`\`\`

## Just-In-Time Compilation with Numba

\`\`\`python
from numba import jit
import numpy as np

@jit(nopython=True)
def matrix_multiply_numba(A, B):
    return np.dot(A, B)

# Can be 100x faster than pure Python for numerical code
\`\`\`

## Best Practices Summary

1. **Profile first** - measure before optimizing
2. **Use appropriate data structures** - dict for lookups, set for membership tests
3. **Minimize function calls** in tight loops
4. **Use generators** for large datasets
5. **Choose the right concurrency model** - multiprocessing for CPU, asyncio for I/O
6. **Consider Cython or NumPy** for performance-critical code

## Conclusion

Python performance optimization is about understanding your bottlenecks and applying the right techniques. Start with profiling, then apply targeted optimizations. Remember: premature optimization is the root of all evil, but informed optimization is essential for scalable applications.`,
      author: "Raj Kunwar Singh",
      publishedAt: "2023-12-20",
      readTime: "15 min read",
      category: "Python",
      tags: ["Python", "Performance", "Optimization", "Profiling", "Concurrency"],
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ]
}

export default portfolioData 