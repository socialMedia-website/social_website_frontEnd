import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Bell, MessageCircle, Menu, User, Search, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropDown-menu";

const Topbar = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="container mx-auto px-4 flex items-center justify-between h-16">
    <div className="flex items-center">
       <Link to="/app" className="text-xl font-bold text-indigo-600">
            ConnectHub
          </Link>
    </div>
    <div className="hidden md:flex items-center max-w-md w-full mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="w-full pl-8"
            />
          </div>
        </div>
  
   <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/app/chat">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/app/profile/me" className="cursor-pointer">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/app/friends" className="cursor-pointer">Friends</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  </header>
);

export default Topbar;