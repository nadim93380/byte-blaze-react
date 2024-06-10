/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import placeHolderimg from '../assets/404.jpg'

const BlogCard = ({ blog }) => {
    
    const {id,cover_image,title,published_at,description}=blog
    return (
        
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="transition hover:scale-105 hover:border-2 hover:border-secondary max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderimg} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{published_at}</span>
					<p>{description}</p>
				</div>
			</Link>
        
    );
};

export default BlogCard;