import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, X, Image } from 'lucide-react';
import { getProducts, addProduct, updateProduct, deleteProduct, Product } from '../../utils/storage';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    features: '',
  });

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const resetForm = () => {
    setFormData({ name: '', price: '', description: '', image: '', features: '' });
    setEditingProduct(null);
  };

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        features: product.features.join('\n'),
      });
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productData: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      price: formData.price,
      description: formData.description,
      image: formData.image || '/hero-bg.png',
      features: formData.features.split('\n').filter(f => f.trim()),
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }

    setProducts(getProducts());
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这个商品吗？')) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">商品管理</h1>
            <p className="text-gray-400">管理您的产品列表</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 bg-agri-yellow text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
          >
            <Plus className="w-5 h-5" />
            添加商品
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-agri-yellow/30 transition-colors"
            >
              <div className="h-40 bg-zinc-800 relative">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="w-12 h-12 text-gray-600" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-agri-yellow font-bold text-xl mb-4">{product.price}</p>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-agri-yellow/20 text-agri-yellow rounded-lg hover:bg-agri-yellow/30 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    编辑
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    删除
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold">{editingProduct ? '编辑商品' : '添加商品'}</h2>
              <button onClick={handleCloseModal} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">商品名称</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="例如：Pro 专业版"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">价格</label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="例如：¥ 89,999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">图片路径</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none"
                  placeholder="/hero-bg.png"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">描述</label>
                <textarea
                  required
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none resize-none"
                  placeholder="适合 500 亩左右大型基地"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">特性（每行一个）</label>
                <textarea
                  rows={4}
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-white/10 rounded-xl focus:border-agri-yellow outline-none resize-none"
                  placeholder="增强型独立悬挂底盘&#10;100W 极速激光模组"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-agri-yellow text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  保存
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}