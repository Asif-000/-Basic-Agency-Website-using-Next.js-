
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <div className="container-custom min-h-[60vh] flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-agency-blue mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you were looking for.
        </p>
        <Button asChild className="bg-agency-blue hover:bg-agency-lightBlue">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
