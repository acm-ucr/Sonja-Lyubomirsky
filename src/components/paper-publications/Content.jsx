import { SECTIONS } from "@/data/publications/Sections";

const Content = () => {
  return (
    <div className="w-1/5">
      <ol className="space-y-4 text-gray-500 list-outside dark:text-gray-400">
        {SECTIONS.map((section, index) => (
          <li key={index}>
            <a
              className="hover:text-sonja-orange-200 cursor-pointer"
              href={`#${section.title}`}
            >
              {section.title}
            </a>
            <ul className="ps-8 mt-2 space-y-1 list-disc list-outside">
              {section.title === "Books" &&
                section.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.title}`}
                      className="hover:text-sonja-orange-200 cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              {section.title === "Publications" &&
                Object.keys(section.items)
                  .reverse()
                  .map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item}`}
                        className="hover:text-sonja-orange-200 cursor-pointer"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;