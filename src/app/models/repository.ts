export interface Repository {
    id: number; // Repository ID
    name: string; // Repository name
    full_name: string; // Full name of the repository
    private: boolean; // Whether the repository is private
    html_url: string; // URL of the repository
    description: string | null; // Repository description
    updated_at: string; // Last update timestamp
    git_url: string; // Git URL
    ssh_url: string; // SSH URL
    clone_url: string; // Clone URL
  }