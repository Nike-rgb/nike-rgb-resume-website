interface Post {
  title: string;
  link: string;
  pubDate: string;
}

interface MediumItem {
  title: string[];
  link: string[];
  pubDate: string[];
}

async function fetchMediumPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        "https://medium.com/feed/@nikeshkazi"
      )}`
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return data.items.slice(0, 3).map((item: MediumItem) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export default async function MediumStories() {
  const posts = await fetchMediumPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {" "}
      <h2 className="text-lg font-semibold text-slate-500 mb-6">
        Latest from Medium
      </h2>
      {posts.length === 0 && <p className="text-gray-400">No posts found.</p>}
      <ul className="space-y-6">
        {" "}
        {posts.map((post, idx) => {
          const pubDate = new Date(post.pubDate);
          const isProminentStory = idx === 0;

          return (
            <li
              key={idx}
              className="pb-4 border-b border-gray-200 last:border-b-0"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-gray-900 leading-tight ${
                  isProminentStory
                    ? "text-2xl font-extrabold md:text-4xl"
                    : "text-xl font-semibold"
                } hover:underline`}
              >
                {post.title}
              </a>

              <p
                className={`mt-2 ${
                  isProminentStory
                    ? "text-sm text-gray-600"
                    : "text-sm text-gray-500"
                }`}
              >
                {pubDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
