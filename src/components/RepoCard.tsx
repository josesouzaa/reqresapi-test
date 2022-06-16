interface Repo {
  id: number
  name: string
  html_url: string
  language: string
  owner: {
    login: string
    avatar_url: string
    url: string
  }
}

interface RepoCardProps {
  repo: Repo
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="w-full bg-slate-600 text-slate-300 p-6 rounded shadow-md relative flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-xl text-slate-100">{repo.name}</h3>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum non
          unde, dolor ratione laboriosam rem totam doloribus, dolorum eligendi
          ducimus ullam voluptatum, distinctio cumque praesentium? Modi sint
          fuga officiis ex?
        </p>

        <span className="font-semibold">Main language: {repo.language}</span>
      </div>

      <div className="flex gap-2 items-center">
        <img
          className="w-12 h-12 rounded-md"
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
        />

        <p>
          By:
          <br />
          <a
            className="font-semibold hover:underline transition"
            href={repo.owner.url}
            target="_blank"
          >
            {repo.owner.login}
          </a>
        </p>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        className="absolute hover:animate-pulse top-2 right-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
    </div>
  )
}
