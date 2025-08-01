import Header from '@/component/header';
import Link from 'next/link';
export default async function Home() {
  const res = await fetch('http://localhost:3001/api/post/', {
    cache: 'no-cache',
  });
  if(!res.ok) {
    return(
      <div>
        <Header />
        <div className="w-[800px] min-h-[70vh] p-4 text-[15px] mx-auto bg-[#d9eaff]">
          <p>Không thể tải bài viết</p>
        </div>
      </div>
    );
  };
  const posts = await res.json();
  return (
    <div>
      <Header />
      <div className="w-[800px] min-h-[70vh] p-4 text-[15px] mx-auto bg-[#d9eaff]">
        <h1 className='text-[20px] mb-4'>Tin tức mới nhất</h1>
        <ul>
          {
            posts.data.map((post) => (
              <li key={post.id} className='mb-4'>
                <h3 className='hover:text-blue-600'><a href={`/post/${post.slug}`}><b>{post.title}</b></a></h3>
                <p>{post.createdAt}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}