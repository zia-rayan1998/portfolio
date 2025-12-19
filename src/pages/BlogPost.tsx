import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// If you prefer local curated posts, set this to true.
const USE_LOCAL_BLOGS = true;

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  cover_image: string | null;
  created_at: string;
  author_id: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      // Dynamically import supabase only when not using local blogs.
      if (USE_LOCAL_BLOGS) {
        // Local mode: redirect back to blog list (no single-post view for local links).
        navigate('/blog');
        return;
      }

      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error || !data) {
        navigate('/blog');
        return;
      }

      setPost(data);
      setIsLoading(false);
    };

    fetchPost();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-4 bg-muted rounded w-1/4 mb-8" />
            <div className="h-64 bg-muted rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <article className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Author
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.created_at), 'MMMM d, yyyy')}
              </span>
            </div>
          </header>

          {post.cover_image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 rounded-xl overflow-hidden"
            >
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-foreground/90 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
