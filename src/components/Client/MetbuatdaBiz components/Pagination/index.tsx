import Pagination from '@mui/material/Pagination';
import type { fakeData } from '../../../../types/metbuatdabiz.types';

type PaginationComponentProps = {
    data: fakeData[];
    itemsPerPage: number;
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginationComponent({ data, itemsPerPage, currentPage, setCurrentPage }: PaginationComponentProps) {
    const handlePageChange = (_: unknown, value: number) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex items-center justify-center my-10">
            <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
                className="mt-4"
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "#a3a3a3",
                        borderRadius: "0px",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#48c4d4",
                            color: "white",
                        },
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#3C3950 !important",
                        color: "white",
                    },
                }}
            />
        </div>
    )
}