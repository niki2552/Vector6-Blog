using FluentNHibernate.Mapping;
using Vector6_Blog.Core.Objects;

namespace Vector6_Blog.Core.Mapping
{
    public class PostMap:ClassMap<Post>
    {
        public PostMap ()
        {
            Id(x => x.Id);

            Map(x => x.Title)
                .Length(500)
                .Not.Nullable();


        }
    }
}