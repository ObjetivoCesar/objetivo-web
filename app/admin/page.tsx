'use client';
import { useState, useRef, useEffect, Suspense } from "react";
import { useSession, signOut } from 'next-auth/react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    refreshAdminPage?: () => void;
  }
}
// import { getAllArticles } from "@/lib/utils";

const tabs = [
  { id: "imagenes", label: "Imágenes" },
  { id: "videos", label: "Videos" },
  { id: "articulos", label: "Artículos" },
  { id: "gestion", label: "Editar/Eliminar" },
  { id: "cotizaciones", label: "Cotizaciones" },
  { id: "estadisticas", label: "Estadísticas" },
  { id: "clientes", label: "Clientes / Consentimiento" },
  { id: "newsletter", label: "Newsletter" },
];

function ImagenUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [alt, setAlt] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUrl("");
      setCopied(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", alt);
    formData.append("title", title);
    // Llamada a la API para subir la imagen
    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.url) {
      setUrl(data.url);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    if (url) {
      const markdown = `![${alt || "Texto alternativo"}](${url} \"${title || "Título de la imagen"}\")`;
      navigator.clipboard.writeText(markdown);
      setCopied(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#111111] file:text-white hover:file:bg-black"
      />
      <input
        type="text"
        placeholder="Texto alternativo (alt)"
        value={alt}
        onChange={e => setAlt(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
      />
      <input
        type="text"
        placeholder="Título de la imagen"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-white text-[#111111] font-bold py-2 rounded-full mt-2 hover:bg-[#e5e5e5] transition-colors disabled:opacity-50"
      >
        Subir imagen
      </button>
      {url && (
        <div className="mt-4 flex flex-col gap-2">
          <span className="text-green-400">¡Imagen subida!</span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="px-2 py-1 rounded bg-[#111111] border border-[#111111] text-white w-full"
            />
            <button onClick={handleCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [copiedUrl, setCopiedUrl] = useState("");

  const searchImages = async (q: string) => {
    const res = await fetch("/api/images-meta");
    const images = await res.json();
    const filtered = images.filter((img: any) =>
      img.title?.toLowerCase().includes(q.toLowerCase()) ||
      img.alt?.toLowerCase().includes(q.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    if (query.length > 1) {
      searchImages(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleCopy = (img: any) => {
    const markdown = `![${img.alt || "Texto alternativo"}](${img.url} \"${img.title || "Título de la imagen"}\")`;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(markdown);
      setCopiedUrl(img.url);
      setTimeout(() => setCopiedUrl(""), 2000);
    }
  };

  return (
    <div className="mb-6">
      <label className="block font-semibold mb-2">Buscar imágenes ya subidas</label>
      <input
        type="text"
        placeholder="Buscar por título o alt..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none w-full mb-4"
      />
      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((img, idx) => (
            <div key={idx} className="bg-[#111111] rounded-lg p-2 flex flex-col items-center">
              <img src={img.url} alt={img.alt} className="w-full h-32 object-contain mb-2" />
              <div className="text-xs text-gray-300 mb-1">{img.title}</div>
              <button
                onClick={() => handleCopy(img)}
                className="bg-[#111111] px-2 py-1 rounded text-white text-xs font-semibold hover:bg-black"
              >
                {copiedUrl === img.url ? "Copiado" : "Copiar URL"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface Article {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  image?: string;
  date?: string;
  tags?: string;
  metaDescription?: string;
  meta_description?: string;
  keyword?: string;
  cover_image?: string;
  published_at?: string;
  meta?: {
    tags?: string;
    description?: string;
    keyword?: string;
  };
}

interface ArticleEditorProps {
  articleToEdit?: Article;
  onSave?: () => void;
}

function ArticleEditor({ articleToEdit, onSave }: ArticleEditorProps) {
  const categories = [
    { id: "marketing-para-pymes", label: "Marketing para PyMEs" },
    { id: "automatizacion-de-ventas", label: "Automatización de Ventas" },
    { id: "posicionamiento-en-google", label: "Posicionamiento en Google" },
    { id: "activaqr-gastronomia", label: "ActivaQR Gastronomía" },
    { id: "activaqr-networking", label: "ActivaQR Networking" },
    { id: "casos-de-exito", label: "Casos de Éxito" },
    { id: "negocios-locales", label: "Negocios Locales" }
  ];
  const [title, setTitle] = useState(articleToEdit?.title || "");
  const [date, setDate] = useState(articleToEdit?.date || "");
  const [author, setAuthor] = useState("César Reyes Jaramillo");
  const [tags, setTags] = useState(articleToEdit?.tags || "");
  const [excerpt, setExcerpt] = useState(articleToEdit?.excerpt || "");
  const [metaDescription, setMetaDescription] = useState(articleToEdit?.metaDescription || "");
  const [keyword, setKeyword] = useState(articleToEdit?.keyword || "");
  const [slug, setSlug] = useState(articleToEdit?.slug || "");
  const [image, setImage] = useState(articleToEdit?.image || "");
  const [category, setCategory] = useState(articleToEdit?.category || categories[0].id);
  const [content, setContent] = useState(articleToEdit?.content || "");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  // Función para escapar correctamente las cadenas para YAML
  const escapeYAMLString = (str: string): string => {
    if (!str) return '';
    // Escapar comillas dobles y caracteres especiales
    return str
      .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Eliminar caracteres de control
      .replace(/["']/g, match => `\\${match}`) // Escapar comillas
      .trim();
  };

  // Función para formatear correctamente los tags
  const formatTags = (tagsStr: string): string => {
    if (!tagsStr) return '[]';

    // Convertir a array, limpiar y asegurar que sean strings válidos
    const tagsArray = tagsStr
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
      .map(tag => `"${escapeYAMLString(tag)}"`);

    return `[${tagsArray.join(', ')}]`;
  };

  const buildYAML = () => {
    // Validar y limpiar los datos antes de usarlos
    const safeTitle = escapeYAMLString(title || '');
    const safeExcerpt = escapeYAMLString(excerpt || '');
    const safeMetaDesc = escapeYAMLString(metaDescription || '');
    const safeKeyword = escapeYAMLString(keyword || '');
    const safeCategory = escapeYAMLString(category || '');
    const safeSlug = slug?.trim() || '';

    // Construir el frontmatter como objeto para validación
    const frontmatter: Record<string, any> = {
      title: `"${safeTitle}"`,
      description: `"${safeExcerpt}"`,
      date: `"${date || new Date().toISOString().split('T')[0]}"`,
      category: `"${safeCategory}"`,
      meta_description: `"${safeMetaDesc}"`,
      keyword: `"${safeKeyword}"`,
      tags: formatTags(tags || '')
    };

    // Añadir campos opcionales si existen
    if (safeSlug) {
      frontmatter.slug = `"${safeSlug}"`;
      console.log('Incluyendo slug personalizado en el frontmatter:', safeSlug);
    }

    if (image?.trim()) {
      frontmatter.image = `"${image.trim()}"`;
    }

    // Convertir el objeto frontmatter a YAML
    const yamlContent = Object.entries(frontmatter)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    return `---\n${yamlContent}\n---`;
  };

  // Guardar y restaurar el borrador aunque cambies de pestaña
  useEffect(() => {
    const savedData = localStorage.getItem("admin-article-form");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setTitle(parsed.title || "");
      setDate(parsed.date || "");
      setAuthor("César Reyes Jaramillo");
      setTags(parsed.tags || "");
      setExcerpt(parsed.excerpt || "");
      setImage(parsed.image || "");
      setCategory(parsed.category || categories[0].id);
      setContent(parsed.content || "");
      setMetaDescription(parsed.metaDescription || "");
      setKeyword(parsed.keyword || "");
      setSlug(parsed.slug || "");
    }
    // Restaurar al volver a la pestaña
    const onFocus = () => {
      const data = localStorage.getItem("admin-article-form");
      if (data) {
        const parsed = JSON.parse(data);
        setTitle(parsed.title || "");
        setDate(parsed.date || "");
        setAuthor("César Reyes Jaramillo");
        setTags(parsed.tags || "");
        setExcerpt(parsed.excerpt || "");
        setImage(parsed.image || "");
        setCategory(parsed.category || categories[0].id);
        setContent(parsed.content || "");
        setMetaDescription(parsed.metaDescription || "");
        setKeyword(parsed.keyword || "");
        setSlug(parsed.slug || "");
      }
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  useEffect(() => {
    if (articleToEdit) {
      console.log('Inicializando editor con artículo:', articleToEdit);
      setTitle(articleToEdit.title || '');
      setSlug(articleToEdit.slug || '');
      setContent(articleToEdit.content || '');
      setExcerpt(articleToEdit.excerpt || '');
      setCategory(articleToEdit.category || '');
      setImage(articleToEdit.image || articleToEdit.cover_image || '');
      setDate(articleToEdit.date || articleToEdit.published_at || new Date().toISOString().split('T')[0]);
      setTags(articleToEdit.tags || articleToEdit.meta?.tags || '');
      setMetaDescription(articleToEdit.metaDescription || articleToEdit.meta_description || articleToEdit.meta?.description || '');
      setKeyword(articleToEdit.keyword || articleToEdit.meta?.keyword || '');
      setMetaDescription(articleToEdit.metaDescription || articleToEdit.meta_description || articleToEdit.meta?.description || '');
      setKeyword(articleToEdit.keyword || articleToEdit.meta?.keyword || '');
    } else {
      // Valores por defecto para nuevo artículo
      setTitle('');
      setSlug('');
      setContent('');
      setExcerpt('');
      setCategory('');
      setImage('');
      setDate(new Date().toISOString().split('T')[0]);
      setTags('');
      setMetaDescription('');
      setKeyword('');
    }
  }, [articleToEdit]);

  useEffect(() => {
    localStorage.setItem("admin-article-form", JSON.stringify({ title, date, author: "César Reyes Jaramillo", tags, excerpt, image, category, content, metaDescription, keyword, slug }));
  }, [title, date, tags, excerpt, image, category, content, metaDescription, keyword, slug]);

  // Script para formatear URL de imagen Bunny.net a Markdown
  const [bunnyUrl, setBunnyUrl] = useState("");
  const [bunnyAlt, setBunnyAlt] = useState("");
  const [bunnyTitle, setBunnyTitle] = useState("");
  const [bunnyMarkdown, setBunnyMarkdown] = useState("");
  const handleBunnyFormat = () => {
    if (bunnyUrl) {
      setBunnyMarkdown(`![${bunnyAlt || "Texto alternativo"}](${bunnyUrl} \"${bunnyTitle || "Título de la imagen"}\")`);
    }
  };
  const handleBunnyCopy = () => {
    if (bunnyMarkdown) {
      navigator.clipboard.writeText(bunnyMarkdown);
    }
  };

  // Función para generar un slug consistente
  const generateSlug = (text: string) => {
    if (!text) return '';
    return text
      .toString()
      .normalize('NFD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^[-]+/, '')
      .replace(/[-]+$/, '');
  };

  const handleCopy = () => {
    const markdown = `${buildYAML()}\n\n${content}`;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSave = async () => {
    try {
      setError("");
      setSaved(false);
      setSuccessUrl("");
      setLoading(true);

      // Validar título
      if (!title?.trim()) {
        throw new Error('El título es obligatorio');
      }

      // Validar contenido
      if (!content?.trim()) {
        throw new Error('El contenido del artículo no puede estar vacío');
      }

      // Verificar si estamos editando
      const isEditing = !!articleToEdit?.id;

      if (isEditing && !articleToEdit?.id) {
        console.error('Error: Intento de edición sin ID válido');
        throw new Error('No se pudo identificar el artículo a actualizar. Por favor, recarga la página e inténtalo de nuevo.');
      }

      // Asegurar que la fecha tenga un valor por defecto
      const articleDate = date || articleToEdit?.published_at || new Date().toISOString().split('T')[0];
      setDate(articleDate); // Actualizar el estado de la fecha

      // Asegurarse de que la categoría sea válida
      const safeCategory = category.toLowerCase().replace(/[^a-z0-9-]/g, '');
      if (!safeCategory) {
        throw new Error('La categoría no es válida');
      }

      // Construir el markdown con validaciones incluidas
      const markdownContent = `${buildYAML()}\n\n${content}`;

      // Generar un slug consistente
      const articleSlug = slug.trim() ? generateSlug(slug) : generateSlug(title);

      // Mostrar indicador de carga
      const loadingTimeout = setTimeout(() => {
        setLoading(true);
      }, 300);

      try {
        const url = "/api/save-article";
        const isUpdate = !!articleToEdit?.id;

        // Construir el markdown con los datos actuales
        const markdownContent = buildYAML() + '\n\n' + content;

        // Generar el slug final (usar el personalizado si existe, si no, generarlo del título)
        const finalSlug = slug.trim() || generateSlug(title);

        const requestBody: any = {
          markdown: markdownContent,
          id: articleToEdit?.id,
          originalSlug: articleToEdit?.slug,
          title: title.trim(),
          slug: finalSlug, // Incluir el slug en el cuerpo de la solicitud
          excerpt: excerpt.trim(),
          category: safeCategory,
          tags: tags.trim(),
          metaDescription: metaDescription.trim(),
          keyword: keyword.trim(),
          image: image.trim(),
          date: articleDate
        };

        console.log('Slug que se está enviando:', finalSlug);

        console.log('Enviando solicitud de ' + (isUpdate ? 'actualización' : 'creación') + ':', {
          ...requestBody,
          markdown: markdownContent.substring(0, 100) + '...' // Mostrar solo el inicio para no saturar la consola
        });

        console.log('Enviando solicitud a:', url);
        console.log('Método:', isUpdate ? 'PUT' : 'POST');
        console.log('Datos de la solicitud:', {
          ...requestBody,
          markdown: requestBody.markdown?.substring(0, 100) + '...' // Mostrar solo el inicio para no saturar la consola
        });

        const response = await fetch(url, {
          method: isUpdate ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        clearTimeout(loadingTimeout);
        setLoading(false);

        let data;
        try {
          data = await response.json();
          console.log('Respuesta del servidor:', data);
        } catch (jsonError) {
          console.error('Error al analizar la respuesta JSON:', jsonError);
          const textResponse = await response.text();
          console.error('Respuesta del servidor (texto):', textResponse);
          throw new Error('Error en el formato de la respuesta del servidor');
        }

        if (!response.ok) {
          // Si hay un mensaje de error en la respuesta, mostrarlo
          const errorMessage = data?.error || data?.message || 'Error al guardar el artículo';

          // Manejar específicamente el error de slug duplicado
          if (errorMessage.includes('slug') && errorMessage.includes('ya está en uso')) {
            // Extraer el slug del mensaje de error
            const slugMatch = errorMessage.match(/'([^']+)'/);
            const problemSlug = slugMatch ? slugMatch[1] : 'el especificado';

            // Sugerir un slug alternativo
            const newSlug = `${problemSlug}-${Date.now().toString(36).slice(-4)}`;

            throw new Error(
              `${errorMessage}\n\n` +
              `Sugerencia: Intenta con un slug diferente como "${newSlug}"\n` +
              `O modifica el título para generar un slug único.`
            );
          }

          throw new Error(errorMessage);
        }

        // Verificar si la respuesta tiene un mensaje de éxito
        if (!data.success && !data.article) {
          throw new Error('La respuesta del servidor no es válida');
        }

        // Manejar la respuesta exitosa
        if (data.success) {
          setSaved(true);
          setSuccessUrl(data.article?.url || '');

          // Si hay un callback de guardado, ejecutarlo
          if (onSave) {
            onSave();
          }

          // Mostrar mensaje de éxito
          alert(`Artículo ${isUpdate ? 'actualizado' : 'guardado'} correctamente`);

          // Limpiar el formulario solo si es un artículo nuevo
          if (!isUpdate) {
            setTitle('');
            setContent('');
            setExcerpt('');
            setImage('');
            setTags('');
            setMetaDescription('');
            setKeyword('');
            setSlug('');
            setDate(new Date().toISOString().split('T')[0]);
          }
        } else {
          throw new Error(data.error || 'Error desconocido al guardar el artículo');
        }

        // Recargar la lista de artículos si está disponible
        if (window.refreshAdminPage) {
          window.refreshAdminPage();
        }

      } catch (err) {
        clearTimeout(loadingTimeout);
        setLoading(false);
        throw err;
      }

    } catch (err: unknown) {
      let errorMessage = 'Error desconocido al guardar el artículo';

      if (err instanceof Error) {
        // Mostrar el mensaje de error completo en la consola
        console.error('Error detallado al guardar el artículo:', {
          message: err.message,
          stack: err.stack,
          name: err.name
        });

        // Formatear el mensaje de error para el usuario
        errorMessage = err.message;

        // Si el error es de validación, mostrarlo de manera más amigable
        if (errorMessage.includes('slug') && errorMessage.includes('ya está en uso')) {
          // Ya lo manejamos arriba con sugerencia
        } else {
          // Mensaje genérico para otros errores
          errorMessage = `Error al guardar el artículo: ${errorMessage}`;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        <ImageSearch />
        <label className="font-semibold">Título</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título del artículo"
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Fecha</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Autor</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Categoría</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.label}</option>
          ))}
        </select>
        <label className="font-semibold">Tags (separados por coma)</label>
        <input
          type="text"
          value={tags}
          onChange={e => setTags(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Extracto</label>
        <textarea
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          className="w-full min-h-[60px] px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Meta descripción (SEO)</label>
        <textarea
          value={metaDescription}
          onChange={e => setMetaDescription(e.target.value)}
          className="w-full min-h-[40px] px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Palabra clave principal (SEO)</label>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <label className="font-semibold">Slug (URL personalizada)</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={slug}
            onChange={e => setSlug(e.target.value)}
            placeholder={title ? generateSlug(title) : 'Se generará del título automáticamente'}
            className="flex-1 px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
          />
          <button
            type="button"
            onClick={() => setSlug(generateSlug(title))}
            className="px-3 py-2 rounded bg-[#333] text-white text-sm hover:bg-[#444] transition-colors whitespace-nowrap"
            title="Generar slug del título"
          >
            ✨ Auto
          </button>
        </div>
        {slug && (
          <p className="text-xs text-gray-400 mt-1">
            URL: /blog/{category}/{generateSlug(slug)}
          </p>
        )}
        <label className="font-semibold">Imagen principal (URL)</label>
        <input
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          className="w-full px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <div className="bg-[#222] p-3 rounded mb-2">
          <div className="font-semibold mb-1">Formatear URL de imagen Bunny.net a Markdown</div>
          <div className="flex flex-col md:flex-row gap-2 mb-2 items-stretch">
            <div className="flex-1 flex gap-2 min-w-0">
              <input
                type="text"
                placeholder="Pega aquí la URL de Bunny.net"
                value={bunnyUrl}
                onChange={e => setBunnyUrl(e.target.value)}
                className="flex-1 px-2 py-1 rounded bg-[#111111] border border-[#333] text-white min-w-0"
              />
              <input
                type="text"
                placeholder="Texto alternativo"
                value={bunnyAlt}
                onChange={e => setBunnyAlt(e.target.value)}
                className="flex-1 px-2 py-1 rounded bg-[#111111] border border-[#333] text-white min-w-0"
              />
              <input
                type="text"
                placeholder="Título de la imagen"
                value={bunnyTitle}
                onChange={e => setBunnyTitle(e.target.value)}
                className="flex-1 px-2 py-1 rounded bg-[#111111] border border-[#333] text-white min-w-0"
              />
            </div>
            <div className="flex items-stretch">
              <button
                onClick={handleBunnyFormat}
                className="h-full px-4 py-1 rounded bg-white text-[#111111] font-bold hover:bg-[#e5e5e5] whitespace-nowrap"
                style={{ minWidth: 120 }}
              >
                Formatear
              </button>
            </div>
          </div>
          {bunnyMarkdown && (
            <div className="flex items-center gap-2">
              <input type="text" value={bunnyMarkdown} readOnly className="flex-1 px-2 py-1 rounded bg-[#111111] border border-[#333] text-white" />
              <button onClick={handleBunnyCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">Copiar</button>
            </div>
          )}
        </div>
        <label className="font-semibold">Contenido del artículo (Markdown)</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Pega aquí el contenido del artículo en Markdown"
          className="w-full min-h-[350px] px-4 py-2 rounded bg-[#111111] border border-[#111111] text-white focus:outline-none text-lg"
        />
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleCopy} className="bg-[#111111] px-3 py-1 rounded text-white font-semibold hover:bg-black">
            {copied ? "Copiado" : "Copiar Markdown"}
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Guardando...' : (articleToEdit?.id ? 'Actualizar artículo' : 'Guardar y publicar')}
          </button>
        </div>
      </div>
      <div className="flex-1 bg-white text-black rounded-lg p-4 border border-gray-200 overflow-auto min-w-0 relative">
        {/* Mostrar indicador de carga */}
        {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}

        {/* Mostrar mensajes de éxito/error */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {saved && successUrl && (
          <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
            <p className="font-bold">¡Éxito!</p>
            <p>Artículo guardado correctamente.</p>
            <a
              href={successUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Ver artículo publicado
            </a>
          </div>
        )}

        <h3 className="text-lg font-bold mb-2">Previsualización</h3>
        <div className="prose prose-invert max-w-none text-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${buildYAML()}\n\n${content}`}</ReactMarkdown>
        </div>
      </div>
    </div>
  );

}

function validateYAML(yaml: string) {
  const errors: string[] = [];
  const match = yaml.match(/^---([\s\S]*?)---/);
  if (!match) {
    errors.push("Falta el bloque de encabezado YAML (debe comenzar y terminar con ---)");
    return errors;
  }
  const y = match[1];
  if (!/title:/.test(y)) errors.push("Falta el campo 'title' en el encabezado YAML");
  if (!/date:/.test(y)) errors.push("Falta el campo 'date' en el encabezado YAML");
  if (!/author:/.test(y)) errors.push("Falta el campo 'author' en el encabezado YAML");
  if (!/image:/.test(y)) errors.push("Falta el campo 'image' en el encabezado YAML");
  if (!/excerpt:/.test(y)) errors.push("Falta el campo 'excerpt' en el encabezado YAML");
  if (!/tags:/.test(y)) errors.push("Falta el campo 'tags' en el encabezado YAML");
  return errors;
}


function ArticleManager() {
  const [editingArticle, setEditingArticle] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [showHidden, setShowHidden] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const fetchArticles = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError("");

      const url = forceRefresh
        ? `/api/admin-articles?refresh=true&includeHidden=${showHidden}`
        : `/api/admin-articles?includeHidden=${showHidden}`;

      const res = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      if (!res.ok) throw new Error("Error al cargar los artículos");

      const data = await res.json();
      setArticles(data);
    } catch (e) {
      console.error("Error al cargar artículos:", e);
      setError("No se pudieron cargar los artículos");
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar artículos cuando cambia showHidden
  useEffect(() => {
    if (!isInitialLoad) {
      fetchArticles();
    } else {
      setIsInitialLoad(false);
    }
  }, [showHidden]);

  // Carga inicial
  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (category: string, slug: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar este artículo? Esta acción no se puede deshacer.")) return;

    try {
      setLoading(true);
      setError("");

      // 1. Eliminar de la base de datos
      const res = await fetch("/api/delete-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, slug })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "No se pudo eliminar el artículo");
      }

      // 2. Actualizar el estado local
      setArticles(prevArticles =>
        prevArticles.filter(a => !(a.category === category && a.slug === slug))
      );

      // 3. Forzar recarga de la caché
      await fetchArticles(true);

      // 4. Mostrar confirmación
      alert("Artículo eliminado correctamente");

    } catch (error) {
      console.error("Error al eliminar el artículo:", error);
      setError(error instanceof Error ? error.message : "Error al eliminar el artículo");
    } finally {
      setLoading(false);
    }
  };

  const handleSendNewsletter = async (art: any) => {
    setNewsletterStatus("");
    try {
      const articleData = {
        title: art.title,
        excerpt: art.excerpt,
        category: art.category,
        slug: art.slug,
        image: art.image || art.cover_image,
      };

      const response = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setNewsletterStatus(`✅ Newsletter enviado: ${data.message}`);
      } else {
        setNewsletterStatus(`❌ Error: ${data.error || "No se pudo enviar el newsletter"}`);
      }
    } catch (e) {
      setNewsletterStatus("❌ Error al enviar el newsletter");
    }
    setTimeout(() => setNewsletterStatus(""), 6000);
  };

  const toggleArticleVisibility = async (article: any) => {
    try {
      setLoading(true);

      // Determinar el nuevo estado de visibilidad
      const currentVisibility = article.is_visible === true || article.is_visible === 'true';
      const newVisibility = !currentVisibility;

      console.log('Cambiando visibilidad de', article.slug, 'de', currentVisibility, 'a', newVisibility);

      // Actualizar el estado local inmediatamente para una mejor experiencia de usuario
      setArticles(prevArticles =>
        prevArticles.map(a =>
          a.slug === article.slug ? {
            ...a,
            is_visible: newVisibility
          } : a
        )
      );

      // Llamar a la API para actualizar la visibilidad
      const res = await fetch('/api/admin-articles/visibility', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: article.slug,
          isVisible: newVisibility
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(errorData.error || 'Error al actualizar la visibilidad');
      }

      // Recargar la lista para asegurar que todo esté sincronizado
      await fetchArticles(true);

    } catch (error) {
      console.error('Error al cambiar visibilidad:', error);
      // Revertir el cambio en caso de error
      setArticles(prevArticles =>
        prevArticles.map(a =>
          a.slug === article.slug ? {
            ...a,
            is_visible: article.is_visible // Volver al valor original
          } : a
        )
      );

      alert(`Error al actualizar la visibilidad: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  const extractMetadata = (content: string) => {
    if (!content) return {};

    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return {};

    const frontmatter = frontmatterMatch[1];
    const metadata: Record<string, string> = {};

    frontmatter.split('\n').forEach(line => {
      const match = line.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^['"](.*)['"]$/, '$1');
        metadata[key] = value;
      }
    });

    return metadata;
  };

  const handleEditArticle = (article: any) => {
    console.log('Editando artículo:', article);

    // Extraer metadatos del contenido
    const metadata = article.content ? extractMetadata(article.content) : {};

    // Cargar el artículo en el editor
    const articleData = {
      id: article.id,
      title: metadata.title || article.title || "",
      slug: metadata.slug || article.slug || "",
      content: article.content ? article.content.replace(/^---[\s\S]*?---\n*/, '') : "",
      excerpt: metadata.description || article.excerpt || "",
      category: metadata.category || article.category || "",
      tags: metadata.tags || article.tags || "",
      metaDescription: metadata.meta_description || article.meta_description || metadata.description || "",
      keyword: metadata.keyword || article.keyword || "",
      image: metadata.image || article.image || article.cover_image || "",
      date: metadata.date || article.published_at || article.date || new Date().toISOString().split('T')[0]
    };

    console.log('Datos del artículo a editar:', articleData);
    setEditingArticle(articleData);

    // Desplazarse al editor
    document.getElementById('article-editor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSaveComplete = () => {
    // Recargar la lista de artículos después de guardar
    fetchArticles(true);
    // Limpiar el artículo en edición
    setEditingArticle(null);
  };

  if (loading) return <div className="text-gray-400">Cargando artículos...</div>;
  if (error) return <div className="text-red-400">{error}</div>;
  if (articles.length === 0) return <div className="text-gray-400">No hay artículos publicados.</div>;

  // Si estamos editando un artículo, mostrar el editor
  if (editingArticle) {
    return (
      <div id="article-editor" className="p-6 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {editingArticle.id ? 'Editando: ' : 'Nuevo artículo: '}
              {editingArticle.title || 'Sin título'}
            </h2>
            <p className="text-sm text-gray-500">
              ID: {editingArticle.id || 'Nuevo'}
            </p>
          </div>
          <button
            onClick={() => setEditingArticle(null)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            ← Volver a la lista
          </button>
        </div>
        <ArticleEditor
          articleToEdit={editingArticle}
          onSave={handleSaveComplete}
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="showHidden"
                checked={showHidden}
                onChange={(e) => setShowHidden(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="showHidden" className="text-sm font-medium text-gray-300">
                Mostrar artículos ocultos
              </label>
            </div>
          </div>
        </div>
      </div>

      {newsletterStatus && <div className="mb-4 text-center font-bold text-lg" style={{ color: newsletterStatus.startsWith("✅") ? '#27ae60' : '#e74c3c' }}>{newsletterStatus}</div>}
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#111111]">
            <th className="p-2 text-left">Título</th>
            <th className="p-2 text-left">Categoría</th>
            <th className="p-2 text-left">Fecha</th>
            <th className="p-2 text-left">Estado</th>
            <th className="p-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, idx) => (
            <tr key={idx} className="border-b border-[#4a3b33]">
              <td className="p-2">{art.title}</td>
              <td className="p-2">{art.category}</td>
              <td className="p-2">{art.date}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${art.is_visible === false ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                  {art.is_visible === false ? 'Oculto' : 'Visible'}
                </span>
              </td>
              <td className="p-2 flex gap-2 flex-wrap">
                <a href={`/blog/${art.category}/${art.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Ver
                </a>
                <button
                  onClick={() => handleEditArticle(art)}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  disabled={loading}
                >
                  Editar
                </button>
                <button
                  onClick={() => toggleArticleVisibility(art)}
                  className={`${art.is_visible === false
                    ? 'text-green-400 hover:text-green-300'
                    : 'text-yellow-400 hover:text-yellow-300'
                    } transition-colors`}
                  disabled={loading}
                >
                  {art.is_visible === false ? 'Hacer visible' : 'Ocultar'}
                </button>
                <button
                  onClick={() => handleDelete(art.category, art.slug)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                  disabled={loading}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => handleSendNewsletter(art)}
                  className="text-green-400 hover:text-green-300 font-bold transition-colors"
                  disabled={loading}
                >
                  Newsletter
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface Visita {
  fecha: string;
  pagina: string;
  visitas: number;
}

interface Estadisticas {
  totalVisitas: number;
  visitasHoy: number;
  articulosPublicados: number;
  suscriptoresNewsletter: number;
  ultimasVisitas: Visita[];
  aperturasEmail: {
    [key: string]: {
      email: string;
      aperturas: number;
      ultimaApertura: string | null;
    };
  };
}

function StatisticsPanel() {
  const [stats, setStats] = useState<Estadisticas>({
    totalVisitas: 0,
    visitasHoy: 0,
    articulosPublicados: 0,
    suscriptoresNewsletter: 0,
    ultimasVisitas: [],
    aperturasEmail: {}
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/statistics');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    };

    fetchStats();
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Calcular tasa de apertura
  const calcularTasaApertura = () => {
    const aperturas = Object.values(stats.aperturasEmail || {});
    if (aperturas.length === 0) return 0;

    const totalAperturas = aperturas.reduce((acc: number, curr: any) => acc + curr.aperturas, 0);
    const totalEmails = aperturas.length;

    return ((totalAperturas / totalEmails) * 100).toFixed(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Total Visitas</h3>
        <p className="text-2xl font-bold">{stats.totalVisitas}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Visitas Hoy</h3>
        <p className="text-2xl font-bold">{stats.visitasHoy}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Artículos Publicados</h3>
        <p className="text-2xl font-bold">{stats.articulosPublicados}</p>
      </div>
      <div className="bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Suscriptores Newsletter</h3>
        <p className="text-2xl font-bold">{stats.suscriptoresNewsletter}</p>
      </div>

      <div className="col-span-full bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Estadísticas de Email</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-md font-semibold mb-2">Tasa de Apertura</h4>
            <p className="text-2xl font-bold">{calcularTasaApertura()}%</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Últimas Aperturas</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Aperturas</th>
                    <th className="text-left p-2">Última Apertura</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(stats.aperturasEmail || {}).map(([id, data]: [string, any]) => (
                    <tr key={id} className="border-t border-[#5a463a]">
                      <td className="p-2">{data.email}</td>
                      <td className="p-2">{data.aperturas}</td>
                      <td className="p-2">{data.ultimaApertura ? new Date(data.ultimaApertura).toLocaleString() : 'Nunca'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full bg-[#4a3b33] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Últimas Visitas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Fecha</th>
                <th className="text-left p-2">Página</th>
                <th className="text-left p-2">Visitas</th>
              </tr>
            </thead>
            <tbody>
              {stats.ultimasVisitas.map((visita: any, idx) => (
                <tr key={idx} className="border-t border-[#5a463a]">
                  <td className="p-2">{visita.fecha}</td>
                  <td className="p-2">{visita.pagina}</td>
                  <td className="p-2">{visita.visitas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ClientesPanel() {
  const [lastLeads, setLastLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch('/api/admin/last-leads');
        if (res.ok) {
          const data = await res.json();
          setLastLeads(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center bg-[#222] p-6 rounded-lg border border-[#333]">
        <div>
          <h3 className="text-xl font-bold mb-1">Exportar Base de Datos</h3>
          <p className="text-gray-400 text-sm">Descarga el historial completo de consentimientos y datos de clientes en formato CSV (Compatible con Excel).</p>
        </div>
        <a 
          href="/api/admin/export-leads" 
          download
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <i className="ti ti-download text-xl"></i>
          DESCARGAR EXCEL (.CSV)
        </a>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-4">Últimos Clientes Registrados</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#111111]">
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Nombre</th>
                <th className="p-3 text-left">WhatsApp</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Consentimiento</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="p-4 text-center text-gray-500">Cargando datos...</td></tr>
              ) : lastLeads.length === 0 ? (
                <tr><td colSpan={5} className="p-4 text-center text-gray-500">No hay registros aún.</td></tr>
              ) : (
                lastLeads.map((lead, i) => (
                  <tr key={i} className="border-b border-[#222]">
                    <td className="p-3 text-gray-400">{new Date(lead.created_at).toLocaleDateString()}</td>
                    <td className="p-3 font-semibold">{lead.nombre || 'Anónimo'}</td>
                    <td className="p-3 text-green-400">{lead.whatsapp || '-'}</td>
                    <td className="p-3 text-blue-400">{lead.email || '-'}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {lead.consent_whatsapp ? <i className="ti ti-brand-whatsapp text-green-500" title="WhatsApp"></i> : null}
                        {lead.consent_email ? <i className="ti ti-mail text-blue-500" title="Email"></i> : null}
                        {lead.consent_media ? <i className="ti ti-video text-purple-500" title="Multimedia"></i> : null}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function QuotesManager() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/admin/quotes");
      if (!res.ok) throw new Error("Error al cargar las cotizaciones");
      const data = await res.json();
      setQuotes(data);
    } catch (e) {
      console.error(e);
      setError("No se pudieron cargar las cotizaciones");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const toggleVisibility = async (id: string, currentPublic: boolean) => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isPublic: !currentPublic }),
      });
      if (!res.ok) throw new Error("Error al actualizar la visibilidad");
      await fetchQuotes();
    } catch (e: any) {
      alert(e.message || "Error al actualizar");
    } finally {
      setLoading(false);
    }
  };

  const getStatus = (quote: any) => {
    // Si is_public es 0, está archivada manualmente
    if (quote.is_public === 0 || quote.is_public === false) {
      return { label: "Archivada (Oculta)", color: "bg-red-500/20 text-red-400 border-red-500/30" };
    }

    // Calcular días desde su creación
    if (quote.created_at) {
      const createdDate = new Date(quote.created_at);
      const diffTime = Math.abs(new Date().getTime() - createdDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 15) {
        return { label: "Expirada (Oculta)", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" };
      }
      
      const daysLeft = 15 - diffDays;
      return { 
        label: `Pública (${daysLeft === 0 ? 'Expira hoy' : `Quedan ${daysLeft} días`})`, 
        color: "bg-green-500/20 text-green-400 border-green-500/30" 
      };
    }

    return { label: "Pública", color: "bg-green-500/20 text-green-400 border-green-500/30" };
  };

  if (loading && quotes.length === 0) return <div className="text-gray-400">Cargando cotizaciones...</div>;
  if (error) return <div className="text-red-400">{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-[#111111]">
            <th className="p-3 text-left">ID / Cliente</th>
            <th className="p-3 text-left">Título de Propuesta</th>
            <th className="p-3 text-left">Creado el</th>
            <th className="p-3 text-left">Estado</th>
            <th className="p-3 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {quotes.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">No se encontraron cotizaciones.</td>
            </tr>
          ) : (
            quotes.map((quote) => {
              const status = getStatus(quote);
              return (
                <tr key={quote.id} className="border-b border-[#4a3b33]">
                  <td className="p-3">
                    <div className="font-semibold text-white">{quote.clientName}</div>
                    <div className="text-xs text-gray-400">{quote.id}</div>
                  </td>
                  <td className="p-3 text-gray-300">{quote.title}</td>
                  <td className="p-3 text-gray-400">
                    {quote.created_at ? new Date(quote.created_at).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }) : "-"}
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${status.color}`}>
                      {status.label}
                    </span>
                  </td>
                  <td className="p-3 flex gap-3 items-center">
                    <a
                      href={`/cotizaciones/${quote.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Ver
                    </a>
                    <button
                      onClick={() => toggleVisibility(quote.id, quote.is_public)}
                      className={`text-xs font-bold py-1 px-3 rounded-full border transition-all ${
                        quote.is_public === 0 || quote.is_public === false
                          ? "bg-green-600 hover:bg-green-700 text-white border-transparent"
                          : "bg-[#2d2420] text-gray-300 hover:bg-[#3a2f29] border-[#4a3b33]"
                      }`}
                      disabled={loading}
                    >
                      {quote.is_public === 0 || quote.is_public === false ? "Hacer Pública" : "Archivar"}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}


// Componente que usa useSearchParams, envuelto en un Suspense boundary
function AdminPanelContentWrapper() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("imagenes");
  const [isLoading, setIsLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  // Add a global refresh function
  useEffect(() => {
    const refreshFn = () => window.location.reload();
    window.refreshAdminPage = refreshFn;

    return () => {
      if (window.refreshAdminPage === refreshFn) {
        window.refreshAdminPage = undefined;
      }
    };
  }, []);

  // Efecto para manejar la autenticación
  useEffect(() => {
    const checkAuth = async () => {
      if (status === 'unauthenticated') {
        // Si no estamos autenticados, redirigir a la página de inicio de sesión
        if (!window.location.pathname.startsWith('/auth/signin')) {
          await signOut({ redirect: false });
          const callbackUrl = searchParams?.get('callbackUrl') || '/admin';
          router.push(`/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        }
      } else if (status === 'authenticated') {
        // Si tenemos una sesión, asegurarnos de que el usuario tenga el rol de administrador
        const userRole = (session?.user as any)?.role;
        if (userRole !== 'admin') {
          console.error('Acceso denegado: Se requiere rol de administrador');
          await signOut({ redirect: false });
          router.push('/auth/signin?error=Acceso no autorizado');
          return;
        }
        setIsLoading(false);
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [status, session, router, searchParams]);

  // Si estamos cargando o verificando la autenticación, mostrar un spinner
  if (isLoading || !authChecked) {
    return (
      <div className="min-h-screen bg-[#2d2420] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p>Verificando credenciales...</p>
        </div>
      </div>
    );
  }

  return <AdminPanelContent activeTab={activeTab} setActiveTab={setActiveTab} />;
}

// Componente principal de la página de administración
export default function AdminPanel() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#2d2420] text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p>Cargando panel de administración...</p>
        </div>
      </div>
    }>
      <AdminPanelContentWrapper />
    </Suspense>
  );
}

// ─── Newsletter Panel ───────────────────────────────────────────────────────
function NewsletterPanel() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploadStatus, setImageUploadStatus] = useState<string | null>(null);
  const [ctaText, setCtaText] = useState("");
  const [ctaUrl, setCtaUrl] = useState("");
  const [modalTab, setModalTab] = useState<"edit" | "preview">("edit");
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ok: boolean; msg: string} | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setImageUploadStatus("Subiendo y optimizando a WebP en Bunny.net...");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload-bunny", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al subir imagen a Bunny.net");
      }

      setImageUrl(data.url);
      setImageUploadStatus(`✓ Subida con éxito a Bunny.net (${data.format.toUpperCase()})`);
    } catch (err: any) {
      console.error(err);
      setImageUploadStatus(`❌ ${err?.message || "Error al subir imagen"}`);
    } finally {
      setUploadingImage(false);
    }
  };


  useEffect(() => {
    fetch("/api/newsletter-subscribers")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setSubscribers(data);
          setFiltered(data);
        } else {
          setError(data.error || "Error cargando suscriptores");
        }
        setLoading(false);
      })
      .catch(() => { setError("Error de red"); setLoading(false); });
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(subscribers.filter(s =>
      s.email?.toLowerCase().includes(q) || s.name?.toLowerCase().includes(q)
    ));
  }, [search, subscribers]);

  const handleSend = async () => {
    if (!confirmed) { alert("Debes confirmar antes de enviar."); return; }
    if (!subject.trim() || !body.trim()) { alert("Asunto y cuerpo son obligatorios."); return; }
    setSending(true);
    setSendResult(null);
    try {
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, body, imageUrl, ctaText, ctaUrl }),
      });
      const data = await res.json();
      setSendResult({ ok: res.ok, msg: data.message || (res.ok ? "Enviado correctamente" : "Error al enviar") });
    } catch {
      setSendResult({ ok: false, msg: "Error de red al enviar" });
    }
    setSending(false);
    setConfirmed(false);
  };

  return (
    <div>
      {/* Stats bar */}
      <div className="flex gap-4 mb-6">
        <div className="bg-[#2d2420] rounded-lg px-6 py-4 text-center">
          <div className="text-3xl font-bold text-amber-400">{subscribers.length}</div>
          <div className="text-gray-300 text-sm mt-1">Suscriptores totales</div>
        </div>
        <div className="flex-1 flex items-center">
          <button
            onClick={() => { setShowModal(true); setSendResult(null); setModalTab("edit"); }}
            className="ml-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-colors"
          >
            ✉️ Redactar y Enviar Newsletter
          </button>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Buscar por email o nombre..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded bg-[#2d2420] border border-[#4a3b33] text-white mb-4 focus:outline-none focus:border-amber-500"
      />

      {/* Table */}
      {loading ? (
        <div className="text-center py-8 text-gray-400">Cargando suscriptores...</div>
      ) : error ? (
        <div className="text-red-400 py-4">{error}</div>
      ) : filtered.length === 0 ? (
        <div className="text-gray-400 py-4">No hay suscriptores que coincidan.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-[#4a3b33]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#2d2420] text-gray-300">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Nombre</th>
                <th className="px-4 py-3 text-left">Fecha suscripción</th>
                <th className="px-4 py-3 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id || i} className="border-t border-[#4a3b33] hover:bg-[#2d2420] transition-colors">
                  <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                  <td className="px-4 py-3 text-white">{s.email}</td>
                  <td className="px-4 py-3 text-gray-300">{s.name || "—"}</td>
                  <td className="px-4 py-3 text-gray-400">
                    {s.created_at ? new Date(s.created_at).toLocaleDateString("es-CL") : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      s.active !== false ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
                    }`}>
                      {s.active !== false ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal enviar newsletter */}
      {showModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f1916] rounded-xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-[#4a3b33] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#4a3b33] bg-[#28201c]">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-amber-400">Diseño y Envío de Newsletter</h3>
                <div className="flex bg-[#111] rounded-lg p-1 border border-[#3a2f29]">
                  <button
                    onClick={() => setModalTab("edit")}
                    className={`px-3 py-1 text-xs font-semibold rounded ${modalTab === "edit" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
                  >
                    Edición
                  </button>
                  <button
                    onClick={() => setModalTab("preview")}
                    className={`px-3 py-1 text-xs font-semibold rounded ${modalTab === "preview" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
                  >
                    Vista Previa Email
                  </button>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white text-2xl font-bold">×</button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {modalTab === "edit" ? (
                <>
                  <div className="bg-amber-950/40 border border-amber-800/60 rounded-lg p-3 text-amber-300 text-xs">
                    El correo se enviará con el diseño corporativo de César Reyes Jaramillo (logotipo, tipografía serif/sans optimizada para email, links oficiales y pie legal anti-spam).
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">Asunto del correo *</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      placeholder="Ej: 3 Estrategias para Aumentar Ventas en tu Negocio"
                      className="w-full px-3 py-2 rounded bg-[#111111] border border-[#4a3b33] text-white focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="bg-[#181311] p-3 rounded-lg border border-[#3a2f29] space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Imagen de Cabecera (Bunny.net CDN + WebP)
                    </label>

                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                      <label className="cursor-pointer bg-[#2d2420] hover:bg-[#4a3b33] border border-[#4a3b33] px-3 py-1.5 rounded text-xs text-white font-medium flex items-center gap-2 whitespace-nowrap transition-colors">
                        <span>📁 Subir y convertir a WebP</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>

                      <input
                        type="text"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="https://cesarweb.b-cdn.net/newsletter/..."
                        className="w-full px-3 py-1.5 rounded bg-[#111111] border border-[#4a3b33] text-white focus:outline-none focus:border-amber-500 text-xs font-mono"
                      />
                    </div>

                    {imageUploadStatus && (
                      <p className={`text-xs ${imageUploadStatus.startsWith("✓") ? "text-green-400" : imageUploadStatus.startsWith("❌") ? "text-red-400" : "text-amber-400 animate-pulse"}`}>
                        {imageUploadStatus}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">Texto del Botón CTA (Opcional)</label>
                      <input
                        type="text"
                        value={ctaText}
                        onChange={e => setCtaText(e.target.value)}
                        placeholder="Ej: Leer artículo completo"
                        className="w-full px-3 py-2 rounded bg-[#111111] border border-[#4a3b33] text-white focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>
                    {ctaText ? (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">URL de Destino del Botón *</label>
                        <input
                          type="text"
                          value={ctaUrl}
                          onChange={e => setCtaUrl(e.target.value)}
                          placeholder="https://cesarreyesjaramillo.com/blog/tu-articulo"
                          className="w-full px-3 py-2 rounded bg-[#111111] border border-[#4a3b33] text-white focus:outline-none focus:border-amber-500 text-sm"
                        />
                      </div>
                    ) : (
                      <div className="hidden md:block"></div>
                    )}
                  </div>


                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">Mensaje / Contenido *</label>
                    <textarea
                      value={body}
                      onChange={e => setBody(e.target.value)}
                      placeholder="Escribe el contenido de tu mensaje. Puedes separar párrafos con saltos de línea normales."
                      rows={8}
                      className="w-full px-3 py-2 rounded bg-[#111111] border border-[#4a3b33] text-white focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                </>
              ) : (
                /* Vista Previa */
                <div className="bg-[#121212] p-4 rounded-lg border border-neutral-800">
                  <div className="max-w-xl mx-auto bg-[#1a1a1a] rounded-xl border border-neutral-700 overflow-hidden shadow-xl text-left">
                    <div className="bg-[#241d1a] p-5 text-center border-b border-[#3a2f29]">
                      <h4 className="text-xl font-bold font-serif text-amber-400">César Reyes Jaramillo</h4>
                      <p className="text-[11px] text-gray-400 uppercase tracking-wider">Estrategia de Negocios · Desarrollo Web · SEO & GEO</p>
                    </div>

                    {imageUrl && (
                      <img src={imageUrl} alt="Cabecera" className="w-full max-h-48 object-cover" />
                    )}

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{subject || "(Asunto del correo)"}</h3>
                      <div className="w-10 h-1 bg-amber-500 rounded mb-4"></div>
                      <div className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
                        {body || "(Escribe el contenido del mensaje para verlo aquí)"}
                      </div>

                      {ctaText && (
                        <div className="mt-6 text-center">
                          <span className="inline-block bg-amber-500 text-black font-bold text-xs px-5 py-2.5 rounded-full">
                            {ctaText} →
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-[#241d1a] border-t border-[#3a2f29] text-xs italic text-gray-300">
                      "No adivines, mide. El crecimiento rentable de un negocio se construye con datos y estrategia."
                      <div className="text-amber-400 font-semibold mt-1">— César Reyes Jaramillo</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={e => setConfirmed(e.target.checked)}
                    className="w-4 h-4 accent-amber-500"
                  />
                  <span className="text-xs text-gray-300">
                    Confirmo el envío de este boletín a los <strong>{subscribers.filter(s => s.active !== false).length} suscriptores activos</strong>.
                  </span>
                </label>
              </div>

              {sendResult && (
                <div className={`rounded-lg p-3 text-sm font-semibold ${
                  sendResult.ok ? "bg-green-900/80 text-green-300 border border-green-700" : "bg-red-900/80 text-red-300 border border-red-700"
                }`}>
                  {sendResult.msg}
                </div>
              )}
            </div>

            {/* Footer buttons */}
            <div className="px-6 py-4 border-t border-[#4a3b33] bg-[#28201c] flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-full bg-[#111111] text-gray-300 hover:bg-[#333] text-sm transition-colors"
              >
                Cerrar
              </button>
              <button
                onClick={handleSend}
                disabled={sending || !confirmed}
                className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {sending ? "Enviando..." : `Enviar Campaña`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// Componente que contiene el contenido principal del panel de administración
function AdminPanelContent({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {

  return (
    <div className="min-h-screen bg-[#2d2420] text-white flex flex-col items-center py-12">
      <div className="w-full max-w-[1920px] rounded-lg shadow-lg bg-[#3a2f29] p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-serif">Panel de Administración</h1>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-medium transition-colors"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${activeTab === tab.id
                ? "bg-white text-[#111111]"
                : "bg-[#2d2420] text-white hover:bg-[#4a3b33]"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-[#111111] rounded-lg p-6 min-h-[300px]">
          {activeTab === "imagenes" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Imágenes</h2>
              <p className="text-gray-300 mb-4">
                Aquí podrás subir imágenes, agregar metadatos y obtener la URL interna para usarlas en tus artículos.
              </p>
              <ImagenUploader />
            </div>
          )}

          {activeTab === "videos" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Videos</h2>
              <p className="text-gray-300 mb-4">
                Aquí podrás subir videos o pegar enlaces de YouTube y obtener el código embed listo para tus artículos.
              </p>
              <div className="bg-[#222] p-4 rounded text-gray-300">
                <p>Próximamente podrás subir videos o pegar enlaces de YouTube para obtener el código embed listo para tus artículos.</p>
                <p className="mt-2 text-sm text-gray-400">
                  (Funcionalidad en desarrollo. Si necesitas formatear un link de video, házmelo saber.)
                </p>
              </div>
            </div>
          )}

          {activeTab === "articulos" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Crear Artículo</h2>
              <p className="text-gray-300">
                Aquí podrás crear y previsualizar tus artículos en Markdown antes de publicarlos.
              </p>
              <ArticleEditor />
            </div>
          )}

          {activeTab === "gestion" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Editar o Eliminar Artículos</h2>
              <p className="text-gray-300">
                Aquí podrás ver, editar o eliminar artículos ya publicados.
              </p>
              <ArticleManager />
            </div>
          )}

          {activeTab === "cotizaciones" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Cotizaciones (Propuestas)</h2>
              <p className="text-gray-300 mb-6">
                Administra la visibilidad pública de las propuestas comerciales. Las propuestas expiran automáticamente a los 15 días.
              </p>
              <QuotesManager />
            </div>
          )}

          {activeTab === "estadisticas" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Estadísticas del Sitio</h2>
              <p className="text-gray-300 mb-4">
                Aquí podrás ver las estadísticas de visitas y el rendimiento del sitio.
              </p>
              <StatisticsPanel />
            </div>
          )}

          {activeTab === "clientes" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Base de Datos de Clientes</h2>
              <p className="text-gray-300 mb-6">
                Gestión de leads y registros de consentimiento obtenidos a través del widget de privacidad.
              </p>
              <ClientesPanel />
            </div>
          )}

          {activeTab === "newsletter" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gestión de Newsletter</h2>
              <p className="text-gray-300 mb-6">
                Visualiza los suscriptores y envía campañas de email de forma segura.
              </p>
              <NewsletterPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
