//
//import React from 'react'
//
//import { getProductById } from '@/lib/actions'
//
//type Props = {
//	params: { id: string }
//}
//
//const ProductDetails = async ({ params: {id }}: Props) => {
//	const product = await getProductById(id);
//
//	if(!product)
//	return(
//<div>
//	{id}
//	<h3>APPLe</h3>
//</div>)
//}
//export default ProductDetails

import { getProductById, getSimilarProducts } from "@/lib/actions";
import { Product } from "@/types";
import { redirect } from "next/navigation";

import Image from "next/image";
import { Link } from "heroicons-react";


type Props ={
	params: { id: string}
}
const ProductDetails = async( { params:{ id }}: Props) => {
	const product: Product = await getProductById(id);
    
	if(!product) redirect('/')

	const similarProducts = await getSimilarProducts(id);


  return (
	<div className="product-container">
		<div className="flex gap-28 xl:flex-row flex-col">
			<div className="product-image">
				<Image
                 src={product.image}
				 alt={product.title}
				 width={580}
				 height={400}
				 className="mx-auto"
                />
				
			</div>

			<div className="flex-1 flex flex-col">
				<div className="flex justify-between items-start gap-5 flex-wrap pb-6">
					<div className="flex flex-col gap-3">
						<p className="text-[28px] text-secondary font-semibold">
							{product.title}
						</p>
						<Link
						href={product.url}
						target="_blank"
						className="text-base text-blank opacity-50">
							Visit Product
						</Link>
					</div>
				</div>
			</div>
		</div>
	  { id }
	</div>
  )
}

export default ProductDetails
