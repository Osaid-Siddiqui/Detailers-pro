import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    "https://www.facebook.com/photo/?fbid=122141562626941919&set=pcb.122141562668941919",
    "https://www.facebook.com/photo/?fbid=122141113556941919&set=a.122109188012941919",
    "https://www.facebook.com/reel/1167896691895352",
    "https://www.facebook.com/photo?fbid=122135314550941919&set=pcb.122135314652941919",
    "https://www.facebook.com/photo?fbid=122133194036941919&set=pcb.122133194222941919",
    "https://www.facebook.com/photo/?fbid=122129711576941919&set=a.122109188012941919",
  ];

  useEffect(() => {
    if (window.FB && window.FB.XFBML) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-metallic mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg">
            See the premium results we deliver
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-card border border-border hover:border-metallic transition-all duration-300 fb-embed-container flex flex-col items-center justify-center min-h-[400px]"
            >
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&width=500&show_text=false`}
                width="500"
                height="400"
                className="w-full border-none overflow-hidden rounded-lg"
                title={`Facebook Post ${index + 1}`}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61570825486919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-metallic hover:text-metallic/80 font-medium transition-colors"
          >
            View More on Facebook
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
