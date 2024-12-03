import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ProjectsSection = () => {
  const projects = [
    {
      title: "QuantumCraft",
      description: "BSc. Thesis project.",
      link: "https://github.com/atlarge-research/QuantumCraft.git"
    },
    {
      title: "Secure Chat Client",
      description: "Demonstrates knowledge of security principles in an applied manner using unsafe low-level C programming and OpenSSH library.",
      link: "https://github.com/Shreyasfc/SP2023.git"
    },
    {
      title: "ANPnetstack",
      description: "Demonstrates knowledge of recent networking research by implementing a user-level netstack adhering to the relevant RFCs.",
      link: "https://github.com/Diar03/anp-netskeleton.git"
    },
    {
      title: "Scala Tetris",
      description: "Demonstrates knowledge of Object-Oriented programming and functional programming by replicating Tetris in a functional manner"
    },
    {
      title: "Neural Network Classifier",
      description: "Demonstrates knowledge of neural networks and gradient descent algorithms by implementing a neural network classifier with Traditional Gradient Descent, Stochastic Gradient Descent and Mini-Batch Gradient Descent in Python and writing an extensive report on the performance differences of the trained models in terms of accuracy and recall, best parameter selection method and more.",
      link: "https://github.com/Diar03/ML_Project.git"
    },
    {
      title: "Multi-Threaded NDFS",
      description: "Demonstrates knowledge of multi threaded programming utilizing lock primitives and lock-free data structures by implementing a highly concurrent algorithm in Java.",
      link: "https://github.com/Diar03/Concurrent_NDFS.git"
    },
    {
      title: "Hash Function Assembly",
      description: "Demonstrates knowledge of low-level concepts of functions, memory addresses, CPU instructions and execution by implementing a hashing function in Assembly x86-64 syntax"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="transform-gpu">
            <Alert className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm 
              transition-all duration-500 ease-in-out
              hover:shadow-lg hover:translate-y-[-4px]">
              <AlertTitle>
                <span className="text-2xl font-bold block">{project.title}</span>
              </AlertTitle>
              <AlertDescription>
                <p className="text-gray-700 mb-2">{project.description}</p>
              </AlertDescription>
              {project.link ? (
                <a 
                  href={project.link}
                  className="text-blue-500 inline-block
                    transition-all duration-300 ease-in-out
                    hover:text-blue-600 hover:translate-x-1"
                >
                  View on GitHub
                </a>
              ) : (
                <span className="text-gray-500">Link Not Available</span>
              )}
            </Alert>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default ProjectsSection;