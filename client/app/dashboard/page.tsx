import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Upload,
  Layout,
  Eye,
  Star,
  PlusCircle,
  Lightbulb,
  Github,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Total Portfolios"
          value="3"
          description="You have 3 active portfolios"
          icon={<FileText className="h-5 w-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Views"
          value="1,234"
          description="Across all your portfolios"
          icon={<Eye className="h-5 w-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Favorites"
          value="5"
          description="Templates you've saved"
          icon={<Star className="h-5 w-5 text-muted-foreground" />}
        />
      </div>

      {/* Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>
            View performance metrics for your portfolios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/50">
            <p className="text-muted-foreground">
              Portfolio analytics will appear here
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tips for a Great Portfolio */}
      <Card>
        <CardHeader className="bg-primary/5 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle>Tips for a Great Portfolio</CardTitle>
          </div>
          <CardDescription>
            Follow these tips to make your portfolio stand out
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Showcase Your Best Work</h4>
              <p className="text-sm text-muted-foreground">
                Quality over quantity. Include only your strongest projects that
                demonstrate your skills and expertise.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tell Your Story</h4>
              <p className="text-sm text-muted-foreground">
                Share your journey, process, and the problems you've solved.
                Context helps visitors understand your value.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Keep It Simple</h4>
              <p className="text-sm text-muted-foreground">
                Use clean design and clear navigation. Make it easy for visitors
                to find what they're looking for.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Update Regularly</h4>
              <p className="text-sm text-muted-foreground">
                Keep your portfolio fresh with your latest work and achievements
                to show you're active in your field.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-xl font-medium mb-4">Quick Actions</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <QuickActionCard
            title="Generate from Description"
            icon={<FileText className="h-6 w-6" />}
            href="/dashboard/create/description"
          />
          <QuickActionCard
            title="Upload Resume"
            icon={<Upload className="h-6 w-6" />}
            href="/dashboard/create/resume"
          />
          <QuickActionCard
            title="Choose from Templates"
            icon={<Layout className="h-6 w-6" />}
            href="/dashboard/templates"
          />
          <QuickActionCard
            title="From GitHub"
            icon={<Github className="h-6 w-6" />}
            href="/dashboard/create/github"
          />
        </div>
      </div>

      {/* Recent Portfolios */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium">Recent Portfolios</h3>
          <Button variant="outline" size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <PortfolioCard
            title="Developer Portfolio"
            views="423"
            lastUpdated="2 days ago"
          />
          <PortfolioCard
            title="Design Portfolio"
            views="189"
            lastUpdated="1 week ago"
          />
          <PortfolioCard
            title="Marketing Portfolio"
            views="622"
            lastUpdated="3 days ago"
          />
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function QuickActionCard({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="mb-4 p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h4 className="text-center font-medium">{title}</h4>
        </CardContent>
      </Card>
    </Link>
  );
}

function PortfolioCard({
  title,
  views,
  lastUpdated,
}: {
  title: string;
  views: string;
  lastUpdated: string;
}) {
  return (
    <Card>
      <div className="h-40 bg-muted rounded-t-lg"></div>
      <CardContent className="p-4">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Eye className="mr-1 h-4 w-4" />
            {views} views
          </div>
          <div>Updated {lastUpdated}</div>
        </div>
        <Button variant="outline" size="sm" className="w-full mt-4">
          Deploy Portfolio
        </Button>
      </CardContent>
    </Card>
  );
}
