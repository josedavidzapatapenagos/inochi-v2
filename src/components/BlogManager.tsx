import { useState, type ChangeEvent } from "react";
import { Card, Button} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { PinAuth } from "./PinAuth";

interface Post {
  id: number;
  title: string;
  content: string;
}

export const BlogManager = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Salud Mental", content: "El equilibrio interior es vital para el desarrollo humano." }
  ]);
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [code, setCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [error, setError] = useState(false);
  
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isCreating, setIsCreating] = useState(false);

  const verifyCode = () => {
    if (code === "1234") {
      setIsAuthorized(true);
      setShowCodeInput(false);
      setError(false);
      setCode("");
    } else {
      setError(true);
      setCode("");
    }
  };

  const publishPost = () => {
    if (!newPost.title || !newPost.content) return;
    setPosts([...posts, { id: Date.now(), ...newPost }]);
    setNewPost({ title: "", content: "" });
    setIsCreating(false);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-black uppercase dark:text-white">Píldoras de Sabiduría</h2>
        
        {!isAuthorized ? (
          <button 
            onClick={() => setShowCodeInput(true)} 
            className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:border-inochi-lime hover:text-inochi-lime transition-all"
          >
            Acceso Admin
          </button>
        ) : (
          <Button 
            onClick={() => setIsCreating(true)} 
            className="bg-inochi-lime text-black font-bold h-12 px-8 rounded-xl uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-inochi-lime/20"
          >
            + Crear Píldora
          </Button>
        )}
      </div>

      {/* MODAL DE CREACIÓN */}
      <AnimatePresence>
        {isCreating && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-[#111] p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200 dark:border-slate-800" 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            >
              <h3 className="text-2xl font-black mb-6 dark:text-white uppercase tracking-tight">Nueva Píldora</h3>
              
              <input 
                placeholder="Título de la píldora" 
                className="w-full p-4 mb-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-inochi-lime outline-none transition-all"
                value={newPost.title} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPost({...newPost, title: e.target.value})} 
              />
              <textarea 
                placeholder="Escribe aquí el contenido..." 
                className="w-full p-4 mb-8 rounded-xl bg-slate-100 dark:bg-slate-900 border border-transparent focus:border-inochi-lime outline-none transition-all min-h-[150px]"
                value={newPost.content} 
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewPost({...newPost, content: e.target.value})} 
              />
              
              <div className="flex w-full gap-4">
                <Button 
                  className="flex-1 h-12 font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all rounded-xl"
                  onClick={() => setIsCreating(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 h-12 font-bold uppercase tracking-widest bg-inochi-lime text-black hover:opacity-90 transition-all rounded-xl shadow-lg shadow-inochi-lime/20"
                  onClick={publishPost}
                >
                  Publicar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="relative p-8 border-l-4 border-inochi-lime shadow-lg dark:bg-slate-900 rounded-2xl group">
            {isAuthorized && (
              <button 
                onClick={() => deletePost(post.id)}
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 text-[10px] font-bold uppercase text-red-500 hover:text-red-700 transition-opacity"
              >
                Eliminar
              </button>
            )}
            <h3 className="text-2xl font-black mb-4 dark:text-white tracking-tight">{post.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{post.content}</p>
          </Card>
        ))}
      </div>

      {/* PIN MODAL */}
      <AnimatePresence>
        {showCodeInput && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-[#111] p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200 dark:border-slate-800" 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            >
              <PinAuth 
                value={code} 
                onChange={setCode} 
                onComplete={verifyCode} 
                onCancel={() => {setShowCodeInput(false); setError(false); setCode("")}} 
                error={error} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};