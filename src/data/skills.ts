export interface SkillGroup {
  key: 'langs' | 'backend' | 'frontend' | 'arch' | 'db' | 'cloud' | 'ai' | 'test';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'langs',
    items: ['C# (Advanced)', 'T-SQL (Advanced)', 'Java', 'C++'],
  },
  {
    key: 'backend',
    items: ['ASP.NET Core', 'REST APIs', 'gRPC', 'Spring Boot'],
  },
  {
    key: 'frontend',
    items: ['Angular', 'Blazor (Advanced)', 'React', 'Vue'],
  },
  {
    key: 'arch',
    items: ['Clean Architecture', 'DDD', 'CQRS', 'Event-Driven', 'Event Sourcing', 'Microservices', 'RabbitMQ / MassTransit', 'SOLID'],
  },
  {
    key: 'db',
    items: ['SQL Server (Advanced)', 'PostgreSQL', 'EF Core (Advanced)', 'Redis', 'MongoDB'],
  },
  {
    key: 'cloud',
    items: ['Azure (App Service, Functions, Monitoring)', 'AWS (S3)', 'Docker', 'Kubernetes', 'Azure DevOps CI/CD'],
  },
  {
    key: 'ai',
    items: ['Cursor', 'Claude Code', 'LLM Integration', 'RAG pipelines', 'MCP Servers'],
  },
  {
    key: 'test',
    items: ['xUnit (Advanced)', 'Integration Testing', 'Selenium (E2E)', 'Mutation Testing'],
  },
];
