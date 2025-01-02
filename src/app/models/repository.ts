
export interface Repository {
    id: number; // Repository ID
    name: string; // Repository name
    private: boolean; // Whether the repository is private
    html_url: string; // URL of the repository
    description: string | null; // Repository description
    updated_at: string; // Last update timestamp
    topics: [];
    pictures: string[];
}
