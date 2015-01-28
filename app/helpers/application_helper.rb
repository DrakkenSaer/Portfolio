module ApplicationHelper
  
  def full_title(page_title)
    base_title = 'Saer Designs'
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def menu_empty?(object)
    object.all.empty? unless signed_in?
  end

  def header_link(title, path)
    current_page?(path) ? link_to(title, path, class: 'nav-link active') : link_to(title, path, class: 'nav-link')
  end

  def page_base(container)
    container.empty? ? 'container' : "#{container}"
  end
  
end