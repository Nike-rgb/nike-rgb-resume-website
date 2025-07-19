import { parseStringPromise } from "xml2js";

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
    const res = await fetch("https://medium.com/feed/@nikeshkazi", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/rss+xml",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const xml = await res.text();
    const json = await parseStringPromise(xml);
    console.log(json);
    const items = json.rss.channel[0].item.slice(0, 3) as MediumItem[];

    return items.map((item) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
    }));
  } catch (error) {
    console.log("Error fetching Medium feed:", error);
    return [];
  }
}

export default async function MediumStories() {
  const posts = await fetchMediumPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {" "}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Latest from Medium
      </h2>
      {posts.length === 0 && <p className="text-gray-500">No posts found.</p>}
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
                    ? "text-3xl font-extrabold md:text-4xl"
                    : "text-xl font-semibold"
                } hover:underline`}
              >
                {post.title}
              </a>

              <p
                className={`mt-2 ${isProminentStory ? "text-sm text-gray-600" : "text-sm text-gray-500"}`}
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
