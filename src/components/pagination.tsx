'use client';
import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage, totalPages }: { currentPage: any, totalPages: any }) => {
    const router = useRouter();

    const handlePageChange = (page: any) => {
    };
    const renderPaginationNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={currentPage === i ? 'active bg-amber-400 px-3 py-2 rounded-md text-white font-semibold' : 'bg-amber-400 px-3 py-2 rounded-md text-white font-semibold'}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };
    const handlePrev = () => {
    };
    const handleNext = () => {
    };
    return (
        <div className='flex'>
            <div className="flex gap-[2px]">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className='bg-amber-400 px-2 py-2 rounded-md text-white font-semibold'
                >
                    Prev
                </button>
                {renderPaginationNumbers()}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className='bg-amber-400 px-2 py-2 rounded-md text-white font-semibold'>
                    Next
                </button>
            </div>
        </div>

    );
};

export default Pagination;